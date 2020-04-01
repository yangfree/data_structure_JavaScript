<template>
  <div class="message">
    <div class="message-content">
      <div class="message-post">
        <div class="text">
          <textarea v-model="msg" placeholder="请输入留言内容"></textarea>
        </div>
        <div class="user">
          <div class="user-left">
            <span>留言和昵称必须填写，30秒不能重复提交</span>
          </div>
          <div class="user-right">
            <input
              type="text"
              placeholder="请填写您的昵称"
              v-model="username"
            />
            <button
              type="submit"
              :class="{ disabled: !canClick }"
              @click="submitMsg"
            >
              {{ btnVal }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="message-list">
      <h2>留言列表</h2>
      <ul>
        <li v-for="(item, index) in msgList" :key="index">
          <div class="top">
            <span>{{ item.username }}</span>
            <span>{{ item.date }}</span>
          </div>
          <p class="content">
            {{ item.msg }}
          </p>
          <div class="footer">
            <a
              href="javascript:; void 0"
              @click="reply(item.msg, item.username)"
              >回复</a
            >
            <!-- <a href="javascript:;void 0" class="good">赞同</a> -->
          </div>
        </li>
      </ul>
    </div>
    <MRouter
      :prev="{ text: '< 关于', path: '/about' }"
      :next="{ text: '友链 >', path: '/connect' }"
    />
    <AlertMsg
      ref="Alert"
      :typeClass="alertbox.typeClass"
      :content="alertbox.content"
      :date="alertbox.date"
    />
    <Loading v-if="loading"/>
  </div>
</template>

<script>
import MRouter from "@/components/MRouter";
import AlertMsg from "../components/AlertMsg";
import { getMsg, postMsg } from "@/api/api.js";
import { dateFormat } from "@/utils/index.js";
import Loading from '@/components/Loading';

export default {
  name: "Message",
  components: {
    MRouter,
    AlertMsg,
    Loading
  },
  mounted() {
    this.getMsgList();
  },
  data() {
    return {
      msg: "",
      username: "",
      msgList: [],
      alertbox: {
        typeClass: "",
        content: "",
        date: 2000
      },
      btnTime: 30,
      btnVal: "提交",
      canClick: true,
      loading: true
    };
  },
  methods: {
    reply(content, name) {
      this.msg = `回复${name}: ${content}`;
      document.documentElement.scrollTop = 0;
    },
    getMsgList() {
      getMsg()
        .then(res => {
          this.loading = false;
          if (res.status === "0") {
            this.msgList = res.data;
          } else {
            console.log(res);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    submitMsg() {
      // 校验不能为空
      if (this.msg === "" || this.username === "") {
        this.alertbox.typeClass = "warning";
        this.alertbox.content = "请输入用户昵称或者留言内容";
        this.$refs.Alert.close();
        return false;
      }

      // 校验昵称不能超过十个字符
      if (this.username.length > 9) {
        this.alertbox.typeClass = "default";
        this.alertbox.content = "昵称不能超过9个字符";
        this.$refs.Alert.close();
        return false;
      }
      // 倒计时设置
      if (!this.canClick) return;
      this.canClick = false;
      this.btnVal = this.btnTime + "s";
      let clock = setInterval(() => {
        this.btnTime--;
        this.btnVal = this.btnTime + "s";
        if (this.btnTime < 0) {
          window.clearInterval(clock);
          this.btnTime = 30;
          this.btnVal = "提交";
          this.canClick = true;
        }
      }, 1000);

      // 提交开始
      let params = {
        date: dateFormat("YY-mm-dd HH:MM:SS", new Date()),
        username: this.username,
        msg: this.msg
      };
      postMsg(params)
        .then(res => {
          this.msg = "";
          this.username = "";
          this.getMsgList();
        })
        .then(() => {
          this.alertbox.typeClass = "success";
          this.alertbox.content = "留言成功";
          this.$refs.Alert.close();
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../common/style/message.less";
</style>
