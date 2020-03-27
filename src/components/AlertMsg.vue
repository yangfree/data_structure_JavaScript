<template>
  <transition name="malert">
    <div class="alert" v-if="isShow">
      <div class="content" :class="[typeClass]">
        <i></i>
        <div>{{ content }}</div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Alert",
  props: {
    typeClass: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: "提示信息"
    },
    date: {
      type: String,
      default: 1000
    }
  },
  data() {
    return {
      isShow: true
    };
  },
  mounted() {
    this.show();
  },
  methods: {
    show() {
      setTimeout(() => {
        this.isShow = false;
      }, this.date);
    }
  }
};
</script>

<style lang="less" scoped>
.alert {
  position: fixed;
  top: 10%;
  display: flex;
  justify-content: center;
  line-height: 16px;
  width: 100%;
  font-size: 14px;
  .content {
    color: #444;
    padding: 5px 0;
    width: 200px;
  }
  .warning {
    background-color: orange;
  }
  .error {
    background-color: #ff0000;
  }
  .success {
    background-color: rgb(76, 104, 34);
  }
  .default {
    background-color: #fff;
  }
}
</style>
