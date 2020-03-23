<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { getHome } from "@/api/api.js";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  mounted() {
    console.log(getHome);
  }
};
</script>
