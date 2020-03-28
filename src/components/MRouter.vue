<template>
  <div class="router">
    <router-link :to="prev.path">{{ prev.text }}</router-link>
    <router-link :to="next.path">{{ next.text }}</router-link>
  </div>
</template>

<script>
export default {
  name: "MRouter",
  props: {
    prev: {
      type: Object,
      required: true,
      default: function() {
        return {
          text: "",
          path: ""
        };
      }
    },
    next: {
      type: Object,
      required: true,
      default: function() {
        return {
          text: "",
          path: ""
        };
      }
    }
  }
};
</script>

<style lang="less" scoped>
.router {
  display: flex;
  justify-content: space-between;
  a {
      color: blue;
  }
}
</style>
