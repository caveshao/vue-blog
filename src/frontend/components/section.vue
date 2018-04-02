<template>
  <section>
    <my-article v-for="(article,index) in articles" :key="index" :article="article" :index="index">
    </my-article>
  </section>
</template>
<script>
  import article from "./article";
  import axios from "axios";

  export default {
    name: "my-section",
    created() {
      axios
        .get("http://localhost:6565/articles")
        .then(response => {
          this.articles = response.data;
        })
        .catch(error => {});
    },
    data() {
      return {
        articles: []
      };
    },
    methods: {},
    components: {
      "my-article": article
    }
  };
</script>
<style>
  section {
    min-height: 650px;
    margin: 30px 0;
  }
</style>


