<template>
  <div class="about">
    <div class="header">
      <h2>{{ title }}</h2>
    </div>
    <div class="about-content">
      <h3>{{ choose.name }}</h3>
      <ul>
        <li v-for="(item, index) in choose.list" :key="index">
          {{ item.item }}
        </li>
      </ul>
      <h3>{{ nextVersion.name }}</h3>
      <ul>
        <li v-for="(item, index) in nextVersion.update" :key="index">
          {{ item.item }}
        </li>
      </ul>
    </div>
    <MRouter
      :prev="{ text: '< 简历', path: '/resume' }"
      :next="{ text: '留言 >', path: '/message' }"
    />
  </div>
</template>

<script>
import MRouter from "@/components/MRouter";
import { getAbout } from "@/api/api";

export default {
  name: "About",
  components: {
    MRouter
  },
  data() {
    return {
      title: "",
      choose: {},
      nextVersion: []
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      getAbout()
        .then(res => {
          if (res.status === "0") {
            this.title = res.data.title;
            this.choose = res.data.choose;
            this.nextVersion = res.data.nextVersion;
          } else {
            console.log(res.message);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../common/style/about.less";
</style>
