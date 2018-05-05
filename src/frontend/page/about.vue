<template>
  <div id="about">
    <my-header></my-header>
    <section class="person-play">
      <div class="about-data">
        <div class="top-index"></div>
        <!-- 为图卷下的每部分分别设置动画  -->
        <transition name="t-bg">
          <div class="top-bg" v-if="showing"></div>
        </transition>
        <transition name="b-bg">
          <div class="bot-bg" v-if="showing">

          </div>
        </transition>
        <transition name="b-index">
          <div class="bot-index" v-if="showing">
          </div>
        </transition>
      </div>
      <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width="56%" height=90 src="//music.163.com/outchain/player?type=2&id=442899509&auto=0&height=66">
      </iframe>
      <div class="video-state">
        <transition name="introduct">
          <video class="introduction" controls playsinline muted width="100%" @click="playVideo" v-if="showVideo">
            <source :src="huge" type="video/mp4">
          </video>
          <div v-else @click="showVideo = true" class="ctrl-video">点</div>
        </transition>
      </div>
    </section>
    <div class="draw-qian">
      <transition name="qian">
        <div class="anime-qian" v-if="ifDraw"></div>
        <button @click="ifDraw = true" v-else class="draw-btn">抽奖</button>
      </transition>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
  const header = () => import("../components/header.vue");
  const footer = () => import("../components/footer.vue");

  export default {
    name: "about",
    data() {
      return {
        showing: false,
        huge: require("../assets/huge.mp4"),
        showVideo: false,
        ifDraw: false
      };
    },
    methods: {
      dropDown() {
        this.showing =
          window.scrollY > document.querySelector("header").offsetHeight - 210;
      },
      recovery() {},
      playVideo() {
        let v = document.querySelector(".introduction");
        v.paused ? v.play() : v.pause();
      }
    },
    components: {
      "my-header": header,
      "my-footer": footer
    },
    mounted() {
      //注册事件，监听滚动
      window.addEventListener("scroll", this.dropDown);
    }
  };
</script>
  
<style>
  .person-play {
    min-height: 150px;
    text-align: center;
    background-color: white;
    margin: 30px;
  }

  .about-data {
    position: relative;
    display: inline-block;
    width: 80%;
    height: 900px;
  }

  .top-index {
    position: absolute;
    z-index: 99;
    top: 0;
    background: url("../assets/j1.png") no-repeat center/100%;
    width: 100%;
    height: 50px;
  }

  .top-bg {
    position: absolute;
    z-index: 9;
    top: 0;
    height: 50%;
    width: 100%;
    background: url("../assets/j2.png") no-repeat center/100% 100%;
    overflow: hidden;
  }

  .bot-bg {
    position: absolute;
    z-index: 9;
    top: 50%;
    height: 50%;
    width: 100%;
    background: url("../assets/j3.png") no-repeat center/100% 100%;
    overflow: hidden;
  }

  .bot-index {
    position: absolute;
    z-index: 99;
    bottom: 0;
    background: url("../assets/j4.png") no-repeat center/100%;
    width: 100%;
    height: 50px;
  }

  /*动画 */
  .t-bg-enter-active {
    animation: show-bg 1s linear;
  }
  .t-bg-leave-active {
    animation: show-bg 1s linear reverse;
  }

  .b-bg-enter-active {
    animation: show-bot 1s linear;
  }
  .b-bg-leave-active {
    animation: show-bot 1s linear reverse;
  }

  .b-index-enter-active {
    animation: slow-show 1s linear;
  }

  .b-index-leave-active {
    animation: slow-show 1s linear reverse;
  }

  @keyframes slow-show {
    0% {
      bottom: 850px;
    }
    100% {
      bottom: 0px;
    }
  }

  @keyframes show-bg {
    0% {
      height: 0px;
    }
    50% {
      height: 50%;
    }
    100% {
      height: 50%;
    }
  }

  @keyframes show-bot {
    0% {
      height: 0;
    }
    50% {
      height: 0;
    }
    100% {
      height: 50%;
    }
  }

  @keyframes bounce-in {
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

  @keyframes draw {
    from {
      background-position: 0 0;
    }
    17% {
      background-position: -122px 0;
    }
    34% {
      background-position: -290px 0;
    }
    51% {
      background-position: -440px 0;
    }
    68% {
      background-position: -590px 0;
    }
    85% {
      background-position: -735px 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  .video-state {
    display: block;
    width: 60%;
    padding-left: 3%;
    margin: 10px auto;
    text-align: center;
  }

  .introduction {
    background-color: #790a02;
  }

  .introduct-enter-active {
    animation: bounce-in 1s;
  }

  .introduct-leave-active {
    animation: bounce-in 0.5s reverse;
  }

  .ctrl-video {
    display: inline-block;
    padding: 5% 6%;
    margin-top: 0.5em;
    margin-bottom: 1em;
    background-color: #fcf382;
    border-radius: 50%;
    color: white;
    font-size: 3em;
    cursor: pointer;
  }

  .ctrl-video:hover {
    transform: scale(1.1);
  }

  .draw-qian {
    text-align: center;
    min-height: 390px;
  }

  .anime-qian {
    display: inline-block;
    width: 150px;
    height: 310px;
    background: url(../assets/234.png) no-repeat;
  }

  .qian-enter-active {
    animation: draw 1s steps(1, end) 0s 3 forwards;
  }

  .draw-btn {
    margin-top: 50px;
    background-color: blueviolet;
    width: 50px;
    height: 100px;
    border-radius: 20px;
    color: white;
    outline: none;
    font-size: 25px;
    transform: rotateZ(10deg);
  }
</style>


