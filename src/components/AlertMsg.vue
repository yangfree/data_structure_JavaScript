<template>
  <transition name="malert">
    <div class="alert" v-show="isShow">
      <div class="content" :class="[typeClass]">
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
      default: "",
      required: true
    },
    content: {
      type: String,
      default: "提示信息"
    },
    date: {
      type: Number,
      default: 2000
    }
  },
  data() {
    return {
      isShow: true
    };
  },
  mounted() {},
  methods: {
    close() {
      setTimeout(() => {
        this.isShow = false;
      }, this.date);
      this.isShow = true;
    }
  }
};
</script>

<style lang="less" scoped>
.alert {
  position: fixed;
  top: 20px;
  display: flex;
  justify-content: center;
  line-height: 16px;
  width: 1200px;
  font-size: 14px;
  z-index: 100;
  box-sizing: border-box;
  .content {
    color: #fff;
    padding: 5px 10px;
  }
  .warning {
    background-color: #f0ad4d;
  }
  .error {
    background-color: #ff0000;
  }
  .success {
    background-color: #5cb85c;
  }
  .default {
    background-color: #5bc0de;
  }
}
</style>
