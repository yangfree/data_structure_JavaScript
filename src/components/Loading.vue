<template>
  <div class="loading">
    <div class="img">
      <img :src="imgPath" alt="Loading" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {
      imgPath: require("../common/images/loading.gif")
    };
  }
};
</script>

<style lang="less" scoped>
.loading {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: #fff;
  .img {
    max-width: 600px;
    height: 600px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
