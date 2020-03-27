<template>
  <div class="home">
    <MHeader></MHeader>
    <div class="home-banner">
      <div class="banner-main">
        <div class="version">
          <!-- <i class="iconfont icon-banben"></i> -->
          <b>v1.0.0</b>
        </div>
        <div class="word">
          <span>简单｜</span>
          <span>优雅｜</span>
          <span>高效</span>
        </div>
      </div>
    </div>
    <div class="home-projects">
      <div class="projects-content">
        <h2 class="project-title">项目推荐</h2>
        <div class="project-main">
          <div class="main-left">
            <div class="left-content transiton-box">
              <div class="transtion">
                <h3>我是项目一</h3>
                <div class="description">
                  我是项目一的介绍有什么可说的呢什么都没有你就是个垃圾库萨开会接哈收到就好计划计划霍建华结婚好骄兵必败家笔记本
                </div>
              </div>
            </div>
          </div>
          <div class="main-right">
            <div class="right-content transiton-box">
              <div class="transtion">
                <h3>我是项目一</h3>
                <div class="description">
                  我是项目一的介绍有什么可说的呢什么都没有你就是个垃圾库萨开会接哈收到就好计划计划霍建华结婚好骄兵必败家笔记本
                </div>
              </div>
            </div>
            <div class="right-content transiton-box bottom">
              <div class="transtion">
                <h3>我是项目一</h3>
                <div class="description">
                  我是项目一的介绍有什么可说的呢什么都没有你就是个垃圾库萨开会接哈收到就好计划计划霍建华结婚好骄兵必败家笔记本
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <AlertMsg
      typeClass="warning"
      content="提示信息"
      date="1000"
    ></AlertMsg> -->
    <MFooter></MFooter>
  </div>
</template>

<script>
import MHeader from "@/components/MHeader.vue";
import MFooter from "@/components/MFooter.vue";
import { getHome } from "@/api/api.js";
// import AlertMsg from "@/components/AlertMsg.vue";

export default {
  name: "Home",
  components: {
    MHeader,
    MFooter
    // AlertMsg
  },
  data() {
    return {
      // typeClass: "warning"
    };
  },
  methods: {},
  mounted() {
    console.log(getHome);
  }
};
</script>
<style lang="less" scoped>
@import "../common/style/home.less";
</style>
