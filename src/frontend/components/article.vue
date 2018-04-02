<template>
  <article>
    <h2 class="my-title">{{article.title}}</h2>
    <h3 class="my-paragraph">{{article.paragraph}}</h3>
    <h3 class="my-time">{{article.time}}</h3>
    <button class="more" @click="changeContent">
      <i class="fa fa-plus-square-o" aria-hidden="true"></i>
      <router-link class="article-content" to="/index/content">
        <strong>阅读全文</strong>
      </router-link>
    </button>
  </article>
</template>
<script>
  import content from "./content";

  export default {
    name: "my-article",
    props: ["article", "index"],
    data() {
      return {};
    },
    methods: {
      changeContent() {
        var me = this;
        bus.$on("change-content", function(vm) {
          vm.content = me.article.content;
        });
      }
    }
  };
</script>
<style>
  article {
    border: 3px solid #8ef7d2;
    margin: 10px 10px;
  }

  button.more {
    background-color: #8ef7d2;
    color: white;
    transition: color 1s;
    font-size: 30px;
    outline: none;
    border: none;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }

  button.more:hover {
    color: black;
  }

  .more a {
    text-decoration: none;
    color: white;
    transition: color 1s;
  }

  .more a:hover {
    color: black;
  }

  .my-title {
    text-align: center;
    margin-top: 7px;
    margin-bottom: 10px;
    padding-bottom: 5px;
    border-bottom: 3px solid purple;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }

  .my-paragraph {
    margin-left: 5px;
    margin-right: 5px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  }

  .my-time {
    text-align: right;
  }

  .more {
    width: 100%;
  }

  .my-paragraph,
  .my-time {
    margin-top: 0;
    margin-bottom: 10px;
    font-weight: 100;
  }

  .my-time {
    font-family: "Courier New", Courier, monospace;
  }
</style>

