<template>
  <div id="index">
    <my-header></my-header>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>
<script>
  const header = () => import("../components/header.vue");
  const footer = () => import("../components/footer.vue");

  export default {
    name: "index",
    data() {
      return {};
    },
    components: {
      "my-header": header,
      "my-footer": footer
    }
  };
</script>
<style>

</style>

