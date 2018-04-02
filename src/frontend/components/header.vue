<template>
  <header>

    <div class="menu-control" :class="{'nav-fixed':ifFixed}">
      <div>
        <button class="menu-btn" @click="ifShow = !ifShow">
          menu
        </button>
      </div>
      <div class="nav">
        <transition name="menu">
          <ul class="nav-bar" v-if="ifShow">
            <li class="nav-li" @click="ifShow = false">
              <router-link to="/index">index</router-link>
            </li>
            <li class="nav-li" @click="ifShow = false">
              <router-link to="/archives">archives</router-link>
            </li>
            <li class="nav-li" @click="ifShow = false">
              <router-link to="/about">about</router-link>
            </li>
          </ul>
        </transition>
      </div>
    </div>

    <div class="nav" :class="{'nav-fixed':ifFixed}">
      <ul class="nav-bar">
        <li class="nav-li">
          <router-link to="/index">index</router-link>
        </li>
        <li class="nav-li">
          <router-link to="/archives">archives</router-link>
        </li>
        <li class="nav-li">
          <router-link to="/about">about</router-link>
        </li>
      </ul>
    </div>
    <h1 class="title">
      <a class="title-link" href="javascript:;">Cave Shao</a>
      <p class="motto">先到为君 后到为臣</p>
    </h1>
    <div class="up-top-before" :class="{'up-top':goTop}" @click="upTop()">
      <i>up</i>
    </div>

  </header>
</template>
<script>
  export default {
    name: "my-header",
    mounted() {
      window.addEventListener("scroll", this.changeFixed);
    },
    data() {
      return {
        ifShow: false,
        ifFixed: false,
        goTop: false
      };
    },
    methods: {
      changeFixed() {
        this.goTop = window.scrollY > 0;
        this.ifFixed =
          window.scrollY > document.querySelector("header").offsetHeight - 90;
      },
      upTop() {
        var interval = setInterval(function() {
          let osTop =
            document.documentElement.scrollTop || document.body.scrollTop;

          let speed = Math.floor(-osTop / 6);

          document.documentElement.scrollTop = document.body.scrollTop =
            osTop + speed;

          if (osTop === 0) {
            clearInterval(interval);
          }
        }, 30);
      }
    }
  };
</script>
<style>
  .menu-enter,
  .menu-leave-to {
    height: 0;
  }
  .menu-enter-active,
  .menu-leave-active {
    transition: height 1.5s ease;
  }
  .menu-enter,
  .menu-leave-to {
    height: 0;
  }
  .menu-enter-to,
  .menu-leave {
    height: 155px;
  }
  .menu-enter-active,
  .menu-leave-active {
    transition: height 0.5s ease;
  }

  .up-top-before {
    display: none;
    overflow: hidden;
  }
  .up-top {
    position: fixed;
    right: 5%;
    bottom: 30%;
    font-size: 35px;
    display: inline-block;
  }
  .up-top:hover {
    color: aqua;
    cursor: pointer;
  }

  .motto {
    cursor: pointer;
  }
  .nav-li a {
    cursor: pointer;
    color: white;
    text-decoration: none;
  }
  /*pc设备*/
  @media (min-width: 900px) {
    ul.nav-bar {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-around;
      align-items: center;
    }
    .menu-control {
      display: none;
    }
    .nav-li,
    .nav-li a {
      transition: color 1.5s;
      margin-top: 21px;
    }
    li.nav-li a:hover {
      color: black;
    }
    .nav-fixed {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background-color: #8ef7d2;
      z-index: 115;
    }
  }

  /*移动设备*/
  @media (max-width: 900px) {
    header > div.nav > ul.nav-bar {
      display: none;
    }
    .menu-control {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 99;
      display: flex;
      width: 100%;
      justify-content: flex-start;
      flex-wrap: wrap;
      background-color: #8ef7d2;
      border-bottom: 1px solid #eeeeee;
    }
    .menu-control div:first-child {
      flex-basis: 100%;
      text-align: right;
    }
    .menu-btn {
      margin: 3px;
      background-color: #8ef7d2;
      color: white;
      transition: color 1.2s;
      border: none;
      outline: black;
      font-size: 21px;
    }
    .menu-btn:hover {
      color: black;
    }
    .menu-control ul.nav-bar {
      padding: 0;
      background-color: #8ef7d2;
      overflow: hidden;
    }
    .menu-control ul li.nav-li a {
      width: 100%;
      padding: 0 0 0 10px;
      margin: 3px 0;
      transition: color 1.5s;
    }
    .menu-control ul.nav-bar .nav-li a:hover {
      color: black;
    }

    .nav-fixed {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background-color: #8ef7d2;
      z-index: 115;
    }
  }
</style>

