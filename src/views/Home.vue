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
    <AlertMsg :typeClass="typeClass" :content="content" :date="date"></AlertMsg>
    <MFooter
      :icp="home.icp"
      :createBy="home.createBy"
      :createDate="home.createDate"
    ></MFooter>
  </div>
</template>

<script>
import MHeader from "@/components/MHeader.vue";
import MFooter from "@/components/MFooter.vue";
import { getHome, getProjects } from "@/api/api.js";
import AlertMsg from "@/components/AlertMsg.vue";

export default {
  name: "Home",
  components: {
    MHeader,
    MFooter,
    AlertMsg
  },
  data() {
    return {
      home: {
        title: "",
        description: "",
        icp: "",
        createBy: "",
        createDate: "",
        version: ""
      },
      projectLeft: {},
      projectRight: [],
      typeClass: "",
      content: "",
      date: "1500"
    };
  },
  mounted() {
    this.getHomeInfo();
  },
  methods: {
    toAbout() {
      this.$router.push("/about");
    },
    getHomeInfo() {
      getHome()
        .then(res => {
          if (res.status == 0) {
            this.home = res.data;
          } else {
            this.typeClass = "warning";
            this.content = res.msg;
          }
        })
        .catch(error => {
          this.typeClass = "error";
          this.content = error;
        });
      getProjects()
        .then(res => {
          console.log(res);
          if (res.status == 0) {
            this.projectLeft = res.data.projectLeft;
            this.projectRight = res.data.projectRight;
          } else {
            this.typeClass = "warning";
            this.content = res.msg;
          }
        })
        .catch(err => {
          this.typeClass = "error";
          this.content = res;
        });
    }
  },
  filters: {
    version(val) {
      return `V ${val}.0.0`;
    }
  }
};
</script>
<style lang="less" scoped>
@import "../common/style/home.less";
</style>
