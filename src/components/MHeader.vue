<template>
  <div class="header">
    <header class="header-main">
      <div class="header-left">
        <h2>
          杨洁个人网站
        </h2>
        <p>说点什么呢？还是什么都不说就算了吧。</p>
      </div>
      <nav class="header-right">
        <ul>
          <li>导航1</li>
          <li>导航2</li>
          <li>导航3</li>
          <li>导航4</li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "MHeader"
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
  .header-main {
    display: flex;
    justify-content: space-between;
    .header-left {
      flex: 2;
      p {
        margin: 10px 0 5px;
        font-size: 14px;
        color: #999;
        font-weight: normal;
      }
    }
    .header-right {
      flex: 3;
      ul {
        //   flex-direction: row-reverse;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
