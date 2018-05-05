<template>
  <div class="content-box">
    <p>
      {{content}}
    </p>
    <router-link to="/index">index</router-link>
    <router-link to="/manager">manager</router-link>
  </div>
</template>
<script>
  export default {
    name: "my-content",
    data() {
      return {
        content: "default"
      };
    },
    methods: {},
    computed: {},
    mounted() {
      var me = this;
      console.log("success");
      bus.$emit(
        "change-content",
        me
        //此处的 this 是指的 bus ,所以要用 me 变量替换 mounted 中的 this
      );
    }
  };
</script>

<style>
  .content-box {
    padding: 10px;
    font-family: "articlesFont", "titleFont", "Courier New", Courier, monospace;
  }
</style>

