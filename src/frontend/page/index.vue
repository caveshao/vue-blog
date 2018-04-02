<template>
  <div id="index">
    <my-header></my-header>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>
<script>
  import header from "../components/header";
  import footer from "../components/footer";
  import section from "../components/section";

  export default {
    name: "index",
    data() {
      return {};
    },
    components: {
      "my-header": header,
      "my-footer": footer,
      "my-section": section
    }
  };
</script>
<style>

</style>

