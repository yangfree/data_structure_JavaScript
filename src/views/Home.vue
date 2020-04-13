<template>
  <div class="home">
    <MHeader
      :title="home.title"
      :des="home.description"
      :nav="home.nav"
    ></MHeader>
    <div class="home-banner">
      <div class="banner-main">
        <div class="version" @click="toAbout">
          <b>{{ home.version | version }}</b>
        </div>
        <div class="word">
          <span>简单｜</span>
          <span>优雅｜</span>
          <span>高效</span>
        </div>
        <div class="blog-btn">
          <a href="https://blog.jiepp.com/" target="_blank">个人博客</a>
          <a href="javascript:;void 0" @click="login">注册登陆</a>
        </div>
      </div>
    </div>
    <div class="home-projects">
      <div class="projects-content">
        <h2 class="project-title">项目推荐</h2>
        <div class="project-main">
          <div class="main-left">
            <div class="left-content transiton-box" @click="leftProject">
              <div class="transtion">
                <h3>{{ projectLeft.name }}</h3>
                <div class="description">
                  {{ projectLeft.description }}
                </div>
              </div>
            </div>
          </div>
          <div class="main-right">
            <div
              class="right-content transiton-box"
              v-for="(item, index) in projectRight"
              :key="index"
              @click="rightProject(index)"
            >
              <div class="transtion">
                <h3>{{ item.name }}</h3>
                <div class="description">
                  {{ item.description }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AlertMsg
      ref="Alert"
      :typeClass="alertBox.typeClass"
      :content="alertBox.content"
      :date="alertBox.date"
    />
    <MFooter
      :icp="home.icp"
      :createBy="home.createBy"
      :createDate="home.createDate"
    ></MFooter>
    <loading v-if="loading" />
    <Login v-if="loginShow" @hideLogin="hideLogin"/>
  </div>
</template>

<script>
import { getHome, getProjects } from "@/api/api.js";

import MHeader from "@/components/MHeader.vue";
import MFooter from "@/components/MFooter.vue";
import AlertMsg from "@/components/AlertMsg.vue";
import Loading from "@/components/Loading.vue";
import Login from "@/components/Login.vue";

export default {
  name: "Home",
  components: {
    MHeader,
    MFooter,
    AlertMsg,
    Loading,
    Login
  },
  data() {
    return {
      home: {
        title: "",
        description: "",
        icp: "",
        createBy: "",
        createDate: "",
        version: "",
      },
      projectLeft: {},
      projectRight: [],
      alertBox: {
        typeClass: "",
        content: "",
        date: 1500,
      },
      loading: true,
      loginShow: true,
    };
  },
  mounted() {
    this.getHomeInfo();
  },
  methods: {
    hideLogin(){
      this.loginShow = false;
    },
    login(){
      this.loginShow = true;
    },
    leftProject() {
      window.open("https://github.com/yangfree");
    },
    rightProject(id) {
      if (id === 0) {
        window.open("https://github.com/yangfree/Websoket");
      } else {
        window.open("https://github.com/yangfree/react-todo");
      }
    },
    toAbout() {
      this.$router.push("/about");
    },
    getHomeInfo() {
      Promise.all([getHome(), getProjects()])
        .then((res) => {
          this.loading = false;
          // 首页信息接口处理
          if (res[0].status == 0) {
            this.home = res[0].data;
          } else {
            this.alertBox.typeClass = "warning";
            this.alertBox.content = res.msg;
            this.$refs.Alert.close();
          }
          // 项目接口处理
          if (res[1].status == 0) {
            this.projectLeft = res[1].data.projectLeft;
            this.projectRight = res[1].data.projectRight;
          } else {
            this.alertBox.typeClass = "warning";
            this.alertBox.content = res.msg;
            this.$refs.Alert.close();
          }
        })
        .catch((err) => {
          this.alertBox.typeClass = "error";
          this.alertBox.content = err;
          this.$refs.Alert.close();
        });
    },
  },
  filters: {
    version(val) {
      return `V ${val}.0.0`;
    },
  },
};
</script>
<style lang="less" scoped>
@import "../common/style/home.less";
</style>
