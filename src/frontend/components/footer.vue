<template>
  <footer>
    <div class="avatar-box">
      <img src="../assets/avatar.jpg" class="avatar-img">
      <div class="six-star-top"></div>
      <div class="six-star-bot"></div>
    </div>
    <div class="intro-box">
      <p>Hello I'm caveshao.<br> This is my blog，hoping we can become friend</p>
    </div>
    <div class="contact-box">
      <div>
        <button>
          <i class="fa fa-weibo" aria-hidden="true"></i>
        </button>
      </div>
      <div>
        <button>
          <i class="fa fa-facebook" aria-hidden="true"></i>
        </button>
      </div>
      <div>
        <button>
          <i class="fa fa-google"></i>
        </button>
      </div>
      <div>
        <button>
          <i class="fa fa-twitter"></i>
        </button>
      </div>
      <div>
        <button>
          <i class="fa fa-weixin"></i>
        </button>
      </div>
      <div>
        <button>
          <i class="fa fa-free-code-camp"></i>
        </button>
      </div>
    </div>
    <div class="remark-box">@CaveShao 2017-12</div>
  </footer>
</template>
<script>
  export default {
    name: "my-footer",
    data() {
      return {};
    },
    components: {}
  };
</script>
<style>
  @import "../../../node_modules/font-awesome/css/font-awesome.css";

  footer {
    min-height: 100px;
    background-color: #8ef7d2;
    padding-bottom: 21px;
    color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: center;
    vertical-align: middle;
  }

  .avatar-box,
  .intro-box,
  .contact-box {
    flex: 1 0 360px;
  }

  .avatar-box {
    display: flex;
    position: relative;
    overflow: hidden;
    justify-content: space-around;
    align-items: center;
    min-height: 320px;
  }

  .avatar-box .avatar-img {
    position: absolute;
    z-index: 99;
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  .avatar-box .six-star-top,
  .avatar-box .six-star-bot {
    position: absolute;
    z-index: 9;
    display: inline-block;
    flex: 0 0;
    width: 220px;
    height: 220px;
    background-color: yellow;
    border: 5px solid black;
    transition: transform 1s ease-in;
  }

  .avatar-box .six-star-top {
    transform: rotate(0.125turn);
    z-index: 19;
  }

  .avatar-img:hover + .six-star-top {
    transform: rotate(2turn);
  }

  .avatar-img:hover ~ .six-star-bot {
    transform: rotate(2turn);
  }

  .intro-box {
    text-align: left;
    align-self: center;
    font-size: 26px;
    font-weight: bolder;
  }

  .contact-box {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    padding-top: 30px;
  }

  .contact-box div {
    flex: 0 0 33.3%;
  }

  .contact-box div:nth-child(2) {
    align-self: center;
  }

  .contact-box div:nth-child(5) {
    align-self: center;
  }

  .contact-box button {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
    background-color: #8ef7d2;
    border: none;
    outline: none;
    border-radius: 25%;
    transition: background-color 0.5s;
  }

  .contact-box button:hover {
    background-color: aqua;
  }

  .fa-weibo,
  .fa-facebook,
  .fa-google,
  .fa-weixin,
  .fa-free-code-camp,
  .fa-twitter {
    font-size: 30px;
    color: white;
  }

  .remark-box {
    flex: 0 0 100%;
    margin-top: 21px;
  }
</style>

