<template>
    <div>
        <h3 class="m-title">管 理 文 章</h3>
        <section class="panel-li">
            <article v-for="(article,index) in articles" :key="index" class="
            col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div class="article-style">
                    <h4>{{article.title}}</h4>
                    <span>{{article.time}}</span>
                    <p>{{article.paragraph}}</p>
                    <div class="contral-btns">
                        <button class="delete" @click="deleteArticle(article,index)">删除</button>
                        <button class="add" @click="addArticle">添加</button>
                        <button class="alter" @click="alterArticle(article)">修改</button>
                    </div>
                </div>
            </article>
        </section>
        <transition name="add-show">
            <div class="add-panel" v-show="addPanel">

            </div>
        </transition>
        <transition name="bounce">
            <div class="add-control" v-show="addPanel">
                <input type="text" class="i-title" placeholder="title" v-model="newArticle.title">
                <button class="submit" @click="sendArticle">保存</button>
            </div>
        </transition>
    </div>
</template>
<script>
    import axios from "axios";
    import qs from "qs";

    export default {
      data() {
        return {
          articles: [],
          newArticle: {
            title: "",
            time: "",
            paragraph: "",
            content: ""
          },
          addPanel: false
        };
      },
      methods: {
        addArticle() {
          this.addPanel = true;
          let me = this;
          /* 遍历重置对象 */
          /* 注意 this 的指向 */
          Object.keys(me.newArticle).forEach(function(value) {
            me.$set(me.newArticle, value, "");
          });
        },
        sendArticle() {
          this.addPanel = false;
          let me = this;

          axios({
            url: "http://localhost:6565/add",
            method: "post",
            data: this.newArticle,
            transformRequest: [
              function(data) {
                data = qs.stringify(data);
                return data;
              }
            ],
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          })
            .then(res => {
              /* 使用 vue 可检测的数组变动方式，变动数组 */
              var arr = Object.assign({}, me.newArticle);
              console.log(arr);
              me.articles.push(arr);
            })
            .catch(err => {
              console.log(err);
            });
        },
        deleteArticle(art, index) {
          let me = this;
          /* 删除文章 */
          axios({
            url: "http://localhost:6565/delete",
            method: "post",
            data: {
              title: art.title
            },
            transformRequest: [
              function(data) {
                data = qs.stringify(data);
                return data;
              }
            ],
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          })
            .then(res => {
              /* 使用 vue 可检测的数组变动方式，变动数组 */
              me.articles.splice(index, 1);
            })
            .catch(err => {
              console.log(err);
            });
        },
        alterArticle(art) {},
        findArticles() {
          axios
            .get("http://localhost:6565/articles")
            .then(response => {
              this.articles = response.data;
            })
            .catch(error => {});
        }
      },
      created() {
        axios
          .get("http://localhost:6565/articles")
          .then(response => {
            this.articles = response.data;
          })
          .catch(error => {});
      }
    };
</script>
<style scoped>
    @import url("../../../node_modules/bootstrap/dist/css/bootstrap.min.css");

    .m-title {
      background-color: black;
      margin-top: 0;
      padding: 10px 0;
      text-align: center;
    }

    article {
      padding: 2px;
      margin: 0;
      border: none;
    }

    .article-style {
      display: inline-block;
      position: relative;
      width: 85%;
      margin: 25px;
      padding: 10px 10px 35px 10px;
      min-height: 200px;
      border: 3px solid orange;
      text-align: center;
      color: white;
      background-color: black;
    }

    .contral-btns {
      display: block;
      width: 100%;
      position: absolute;
      bottom: 5px;
      color: black;
    }

    .contral-btns button {
      margin-right: 5px;
    }

    /* 添加文章面板 */
    .add-panel {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.5;
      background-color: white;
      z-index: 999;
    }

    .add-control {
      display: inline-block;
      position: fixed;
      top: 50%;
      left: 50%;
      width: 35%;
      height: 350px;
      margin-top: -165px;
      margin-left: -17.5%;
      padding: 1%;
      padding-top: 1.5%;
      background-color: black;
      border: 6px solid orange;
      border-radius: 10%;
      opacity: 1;
      z-index: 9999;
    }

    .i-title {
      display: block;
      margin-left: 5%;
      width: 90%;
      border-radius: 15%;
      outline: none;
    }

    .submit {
      position: absolute;
      bottom: 10px;
      left: 10%;
      width: 80%;
    }

    /* 动画 */
    @keyframes show {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 0.5;
      }
    }

    @keyframes bounce-out {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }

    .add-show-enter-active {
      animation: show 1s linear;
    }

    .add-show-leave-active {
      animation: show 1s linear reverse;
    }

    .bounce-enter-active {
      animation: bounce-out 1s linear;
    }

    .bounce-leave-active {
      animation: bounce-out 1s linear reverse;
    }
</style>

