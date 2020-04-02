<template>
  <div class="resume">
    <!-- 头部 -->
    <div class="resume-header">
      <h2>{{ title }}</h2>
      <div class="work">
        <a href="mailto:zeya007@163.com" target="_blank">
          Email: {{ description.Email }}
        </a>
        |
        <a :href="description.website" target="_blank">
          web: {{ description.website }}
        </a>
      </div>
      <div class="web">
        <span>{{ job.status | test }}</span>
        <span>{{ job.work }}</span>
      </div>
    </div>
    <!-- 教育经历 -->
    <div class="resume-study">
      <h3>{{ resumeStudy.title }}</h3>
      <div class="title">
        <span>{{ resumeStudy.school }}</span>
        <span>{{ resumeStudy.date }}</span>
      </div>
      <div class="body">
        <span>{{ resumeStudy.profession }}</span>
        <span>{{ resumeStudy.des }}</span>
      </div>
    </div>
    <!-- 工作经历 -->
    <div class="resume-work">
      <h3>{{ resumeWork.title }}</h3>
      <ul>
        <li
          v-for="(item, index) in resumeWork.workexperience"
          :key="index"
          class="list-item"
        >
          <div class="title">
            <span>{{ item.companyName }}</span>
            <span>{{ item.companyDate }}</span>
          </div>
          <div class="body">
            <span>{{ item.job }}</span>
            <span>{{ item.address }}</span>
          </div>
          <ol>
            <li v-for="(des, index) in item.projects" :key="index">
              {{ des.description }}
            </li>
          </ol>
        </li>
      </ul>
    </div>
    <!-- 个人描述 -->
    <div class="resume-person">
      <h3>{{ resumePerson.title }}</h3>
      <p>{{ resumePerson.description }}</p>
    </div>
    <MRouter
      :prev="{ text: '< 首页', path: '/home' }"
      :next="{ text: '关于 >', path: '/about' }"
    >
    </MRouter>
  </div>
</template>

<script>
import { getResume } from "@/api/api.js";
import MRouter from "@/components/MRouter";

export default {
  name: "Resume",
  components: {
    MRouter
  },
  data() {
    return {
      title: "",
      description: {},
      job: {},
      resumeStudy: {},
      resumePerson: {},
      resumeWork: {}
    };
  },
  mounted() {
    getResume()
      .then(res => {
        if (res.status === "0") {
          this.title = res.data[0].title;
          this.description = res.data[0].description;
          this.job = res.data[0].job;
          this.resumeStudy = res.data[1];
          this.resumePerson = this.resumeStudy.personel;
          this.resumeWork = res.data[2];
          //   console.log(res);
        } else {
          console.log("接口返回错误");
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {},
  filters: {
    test(val) {
      return val === "0" ? "在职" : "离职";
    }
  }
};
</script>

<style lang="less" scoped>
@import "../common/style/resume.less";
</style>
