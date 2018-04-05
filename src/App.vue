<template>
  <div id="app">
    <div class="keep" v-show="keepShow" @click.self="clickKeep()">
      <div class="box" @click="clickBox($event)">
        <div class="header">
          <div class="login">
            <p>登录</p>
          </div>
          <div class="register">
            <p>注册</p>
          </div>
        </div>
        <div class="content">
          <form action="" class="loginContent">
            <p>电子邮箱或手机号</p>
            <input type="text" name="username" v-model="userName" class="idInput">
            <p>登录密码</p>
            <input type="password" name="passWord" v-model="passWord" class="idInput">
            <!-- <p>忘记密码</p> -->
            <button type="submit" class="submit">
              <p @click="loginSubmit">登录</p>
            </button>

            <div class="registerSpread">
              <span>在fuyuumi.com预定你的场馆。</span>
              <span>点击这里注册预定</span>
            </div>
          </form>
        </div>
      </div>
    </div>

    <header>
      <div class="header w">
        <a class="logo" href="javascript:void(0);">
          Fuyuumi
          <span>.com</span>
          <span>校园会场预定</span>
        </a>

        <div class="loginList">
          <!-- 跳转预定 -->
          <a href="#" class="reserve">注册预定</a>
          <!-- 注册 -->
          <a href="#" class="register" @click="register()">注册</a>
          <!-- 登陆 -->
          <a href="#" class="login" @click="login()">登录</a>
        </div>

        <!-- 菜单列表 -->
        <div class="menu">
          <ul>
            <li>
              <!-- 首页 -->
              <a href="javascript:void(0);">首页</a>
            </li>
            <li>
              <!-- 运动场馆预定 -->
              <a href="javascript:void(0);">运动场馆预定</a>
            </li>
            <li>
              <!-- 教室使用预定 -->
              <a href="javascript:void(0);">教室使用预定</a>
            </li>
            <li>
              <!-- 大型场馆预定 -->
              <a href="javascript:void(0);">大型场馆预定</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
      passWord: '',
      keepShow: false
    }
  },
  methods: {
    loginSubmit() {
      var username = this.userName
      var password = this.passWord
      this.$http
        .post(
          '/api/user/selectUserLogin',
          {
            username: username,
            password: password
          },
          {}
        )
        .then(response => {
          console.log(response)
        })
    },
    login() {
      this.keepShow = true
    },
    register() {
      this.keepShow = true
    },
    clickKeep() {
      this.keepShow = false
    },
    clickBox(event){
      console.log(event);
      
    }
  }
}
</script>

<style lang="less">
.w {
  width: 1100px;
  margin: 0 auto;
}

.ovfHiden {
  overflow: hidden;
  height: 100%;
}

.keep {
  // display: none;
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  .box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 446px;
    height: 362px;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-top: 0;
    .login,
    .register {
      float: left;
      width: 50%;
      height: 36px;
      text-align: center;
      line-height: 36px;
      box-sizing: border-box;
      border: 1px solid #e0e0e0;
    }
    .register {
      border-left: 0; // background-color: palegoldenrod;
    }
    .content {
      float: left;
      margin-top: 20px;
      padding-left: 34px; // background-color: hotpink;
      .loginContent {
        font-size: 14px;
        font-weight: bold;
        line-height: 24px;
        .idInput {
          padding-left: 8px;
          width: 360px;
          height: 32px;
          border: 1px solid #cccccc;
          margin-bottom: 10px;
        }
        .submit {
          margin-top: 18px;
          width: 370px;
          height: 37px;
          background-color: #0077cc;
          border-radius: 3px;
          color: white;
          font-size: 18px;
          font-weight: bold;
        }
        .registerSpread {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 60px;
          font-size: 14px;
          font-weight: normal;
          text-align: center;
          line-height: 60px;
          border-top: 1px solid #e0e0e0;
        }
      }
    }
  }
}

header {
  width: 100%;
  height: 110px;
  background-color: #003580;
  .header {
    position: relative;
    height: 100%; // background-color: red;
    .logo {
      position: absolute;
      top: 12px;
      color: white;
      font-size: 22px;
      font-weight: bold;
      span:nth-of-type(1) {
        color: #00adee;
      }
      span:nth-of-type(2) {
        font-weight: 200;
      }
    }
    .reserve {
      position: absolute;
      top: 9px;
      right: 128px;
      width: 72px;
      height: 31px;
      color: white;
      font-weight: bold;
      text-align: center;
      line-height: 31px;
      border: 1px solid white;
      border-radius: 3px;
    }
    .register,
    .login {
      position: absolute;
      top: 11px;
      right: 67px;
      width: 44px;
      height: 30px;
      background-color: #fff;
      color: #333;
      font-weight: bold;
      text-align: center;
      line-height: 30px;
      border-radius: 3px;
    }
    .login {
      right: 6px;
    }
    .menu {
      position: absolute;
      top: 57px;
      ul {
        li {
          float: left;
          margin-right: 30px;
          a {
            display: inline-block;
            padding: 9px;
            color: white;
            border-radius: 3px;
          }
          &:first-of-type a {
            background-color: rgba(255, 255, 255, 0.3);
          }
        }
      }
    }
  }
}
</style>

