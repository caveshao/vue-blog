<template>
  <router-view :key="$router.fullpath"></router-view>
</template>
<script>
  import index from "./page/index";

  export default {
    name: "app",
    data() {
      return {};
    },
    components: {
      "my-index": index
    }
  };
</script>
<style src="./main.css">

</style>