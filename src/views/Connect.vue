<template>
  <div class="connect">
    <h2>{{ resData.title }}</h2>
    <ul>
      <li
        v-for="(item, index) in resData.friendsList"
        :key="index"
        @click="toOthers(item.link)"
      >
        <span>名称： {{ item.name }}</span>
        <span>网址： {{ item.link }}</span>
        <span class="des">描述： {{ item.description }}</span>
      </li>
    </ul>
    <MRouter
      :prev="{ text: '< 留言', path: '/message' }"
      :next="{ text: '首页 >', path: '/' }"
    />
  </div>
</template>

<script>
import MRouter from "@/components/MRouter";
import { getConnect } from "@/api/api";

export default {
  name: "Connect",
  components: {
    MRouter
  },
  data() {
    return {
      resData: {}
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      getConnect()
        .then(res => {
          if (res.status === "0") {
            this.resData = res.data;
          } else {
            console.log("接口请求错误");
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    toOthers(href) {
      window.open(href);
    }
  }
};
</script>

<style lang="less" scoped>
@import "../common/style/connect.less";
</style>
