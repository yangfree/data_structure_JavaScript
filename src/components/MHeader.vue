<template>
  <div class="header">
    <header class="header-main">
      <div class="header-left">
        <h2>
          {{ title }}
        </h2>
        <p>{{ des }}</p>
      </div>
      <nav class="header-right">
        <ul>
          <li
            v-for="(item, index) in nav"
            :key="index"
            @click="goSome(item.path)"
          >
            {{ item.item }}
          </li>
        </ul>
        <div class="user" @click="login">登陆注册</div>
      </nav>
    </header>
    <Login v-if="loginShow" @hideLogin="hideLogin" />
  </div>
</template>

<script>
import Login from "@/components/Login.vue";

export default {
  name: "MHeader",
  components: {
    Login,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    des: {
      type: String,
      default: "",
    },
    nav: {
      type: Array,
      default: function() {
        return [];
      },
    },
  },
  data(){
    return {
      loginShow: false
    }
  },
  methods: {
    hideLogin(){
      this.loginShow = false;
    },
    login(){
      this.loginShow = true;
    },
    goSome(path) {
      this.$router.push(`/${path}`);
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px 0;
  background-color: transparent;
  z-index: 99;
  .header-main {
    display: flex;
    justify-content: space-between;
    .header-left {
      flex: 3;
      p {
        margin: 10px 0 5px;
        font-size: 14px;
        color: #999;
        font-weight: normal;
      }
    }
    .header-right {
      flex: 2;
      display: flex;
      justify-content: space-between;
      margin-top: 15px;

      ul {
        flex: 4;
        //   flex-direction: row-reverse;
        display: flex;
        justify-content: space-around;
        li {
          cursor: pointer;
        }
        li:hover {
          transform: scale(1.5);
          transition: all 0.5s ease-in-out;
        }
      }
      .user {
        flex: 1;
        text-align: center;
        cursor: pointer;
      }
    }
  }
}
</style>
