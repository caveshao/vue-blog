<template>
  <div class="main">
    <div class="log">
      <h3>管 理 系 统 登 录</h3>
      <form class="manager-form">
        <div class="form-group">
          <label class="sr-only" for="admin">用户名</label>
          <span class="glyphicon glyphicon-inbox"></span>
          <input type="email" name="admin" id="admin" class="form-control" placeholder="用户名" v-model="loginForm.admin">
        </div>
        <div class="form-group">
          <label class="sr-only" for="password">密码</label>
          <span class="glyphicon glyphicon-modal-window"></span>
          <input type="password" name="password" id="password" class="form-control" placeholder="密码" v-model="loginForm.password">
        </div>
        <button type="button" class="btn btn-default" id="submit" @click="handleLogin">登录</button>
      </form>
    </div>
  </div>
</template>
<script>
  import axios from "axios";
  import qs from "qs";

  export default {
    name: "login",
    data() {
      return {
        loginForm: {
          admin: "",
          password: ""
        }
      };
    },
    methods: {
      handleLogin() {
        axios({
          url: "http://localhost:6565/login",
          method: "post",
          data: {
            admin: this.loginForm.admin,
            password: this.loginForm.password
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
            console.log("success");
            //不可以直接用 点 获取 login
            console.log(res.data["login"]);
            bus.login = res.data.login;
            if (bus.login) {
              this.$router.replace("/manager");
            } else {
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    mounted: function() {
      document.querySelector("body").className = "main-body";
    },
    beforeDestroy: function() {
      document.body.removeAttribute("class", "add_bg");
    }
  };
</script>
<style>
  @import url("../../../node_modules/bootstrap/dist/css/bootstrap.min.css");

  .main-body {
    background: url(../assets/01.jpg) repeat-y top left/100%;
    text-align: center;
  }

  /*记录一下*/
  .log {
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 35%;
    height: 350px;
    margin-top: -165px;
    margin-left: -17.5%;
    padding: 1%;
    padding-top: 1.5%;
    background-color: black;
    border: 6px solid white;
    border-radius: 10%;
  }

  h3 {
    color: white;
  }

  .form-group {
    position: relative;
    margin: 7.5% 0;
  }

  .form-control {
    padding-left: 10%;
  }

  button#submit {
    width: 100%;
    transition: background-color 0.5s ease-in-out;
    outline: none;
  }

  #submit:hover {
    background-color: pink;
  }

  .glyphicon-inbox,
  .glyphicon-modal-window {
    position: absolute;
    left: 3%;
    top: 30%;
  }
</style>