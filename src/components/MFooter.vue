<template>
  <div class="footer">
    <footer class="footer-div">
      <div class="footer-left">
        <span>Create By {{ createBy }} | {{ createDate }}</span>
      </div>
      <div class="footer-right">
        <a href="http://www.beian.miit.gov.cn/" target="_blank">{{ icp }}</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "MFooter",
  props: {
    icp: {
      type: String,
      default: ""
    },
    createBy: {
      type: String,
      default: ""
    },
    createDate: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="less" scoped>
.footer {
  width: 100%;

  .footer-div {
    margin: 0 auto;
    max-width: 1280px;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #ccc;
    padding: 0 15px;
    box-sizing: border-box;
    .footer-right {
      a {
        color: #777;
      }
    }
  }
}
</style>
