<template>
  <div id='archives'>
    <my-header></my-header>
    <section class="archive-part">
      <nav class="archive-nav">
        <ul class="year-nav">
          <li v-for="(year,index) in years" :key="index">
            <button @click="chooseYear(year[0])">{{year[0]}}</button>
          </li>
        </ul>
      </nav>
      <div class="archive-page">
        <ul class="content-page">
          <li v-for="(archive,index) in archives" :key="index" v-show="archive.time[0] === showYear">
            <router-link class="article-link" to="/index/content">
              <h1 @click="changeArticle(archive)">{{archive.title}}</h1>
              <h5>{{archive.time[0] + "-" + archive.time[1] + "-" + archive.time[2]}}</h5>
            </router-link>
          </li>
        </ul>
      </div>
    </section>
    <my-footer></my-footer>
  </div>
</template>
<script>
  import header from "../components/header";
  import footer from "../components/footer";
  import axios from "axios";

  export default {
    name: "archives",
    data() {
      return {
        archives: [],
        showYear: "2199",
        years: []
      };
    },
    components: {
      "my-header": header,
      "my-footer": footer
    },
    methods: {
      chooseYear(year) {
        this.showYear = year;
      },
      changeArticle(article) {
        bus.$on("change-content", function(vm) {
          vm.content = article.content;
        });
      }
    },
    created() {
      axios
        .get("http://localhost:6565/archives")
        .then(response => {
          //axios 自动在函数中将服务器反回的 json 转为 js 对象
          let archive = response.data;
          //归档响应数据
          archive.forEach(element => {
            this.years.push(element.time);
          });
          this.archives = archive;
        })
        .catch(error => {});
    }
  };
</script>
<style>
  .archive-part {
    margin: 10px;
    min-height: 90px;
  }

  .year-nav,
  .content-page {
    margin: 10px;
    margin-bottom: 30px;
  }

  .year-nav li {
    display: inline-block;
    margin-left: 10px;
  }

  .content-page li {
    list-style: none;
  }

  .content-page li a {
    text-decoration: none;
  }

  .content-page h1,
  .content-page h5 {
    margin-bottom: 0px;
    margin-top: 15px;
  }

  .content-page > li > a > h5 {
    text-align: right;
    color: black;
    text-decoration: none;
  }
</style>


