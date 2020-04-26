<template>
  <div class="login">
    <div class="login-bg" @click="hideLogin"></div>
    <div class="login-main">
      <h2 class="login-title">登陆 | 注册</h2>
      <div class="login-box" v-show="loginBox">
        <form action="from" class="login-form">
          <div class="form-item">
            <label for="username">姓名</label>
            <div class="user-input">
              <input type="text" placeholder="请输入您的姓名" />
            </div>
          </div>
          <div class="form-item">
            <label for="password">密码</label>
            <div class="password-input">
              <input type="password" placeholder="请输入您的密码" />
            </div>
          </div>
          <div class="form-item login-btn">
            <button type="button" @click="goRegister">注册</button>
            <button type="button" @click="loginIn">登陆</button>
          </div>
        </form>
      </div>
      <div class="register-box" v-show="registerBox">
        <form action="from" class="login-form">
          <div class="form-item">
            <label for="username">姓名</label>
            <div class="user-input">
              <input type="text" placeholder="请输入您的姓名" />
            </div>
          </div>
          <div class="form-item">
            <label for="password">密码</label>
            <div class="password-input">
              <input type="password" placeholder="请输入您的密码" />
            </div>
          </div>
          <div class="form-item">
            <label for="confirm">确认密码</label>
            <div class="confirm-input">
              <input type="password" placeholder="请确认您的密码" />
            </div>
          </div>
          <div class="form-item login-btn">
            <button type="button" @click="goLogin">登陆</button>
            <button type="button" @click="submitInfo">提交</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginBox: true,
      registerBox: false
    };
  },
  methods: {
    submitInfo() {
      // TODO: 提交信息
      alert("提交信息");
    },
    loginIn() {
      // TODO: 登陆功能
      alert("登陆");
    },
    goLogin() {
      this.registerBox = false;
      this.loginBox = true;
    },
    goRegister() {
      this.loginBox = false;
      this.registerBox = true;
    },
    hideLogin() {
      this.$emit("hideLogin");
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  .login-bg {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 555;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .login-main {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    height: 300px;
    margin-top: -150px;
    margin-left: -200px;
    z-index: 666;
    background: #fff;
    color: #333;
    border-radius: 10px;
    padding: 0 25px;

    .login-title {
      line-height: 60px;
      text-align: center;
      border-bottom: 1px solid #ccc;
    }
    .login-box,
    .register-box {
      .login-form {
        padding: 25px 35px;
        .form-item {
          display: flex;
          flex-direction: row;
          margin-bottom: 25px;
          label {
            width: 100px;
            line-height: 40px;
            font-size: 18px;
            margin-right: 15px;
          }
          input {
            width: 100%;
            box-sizing: border-box;
            padding-left: 15px;
            height: 35px;
            line-height: 35px;
            vertical-align: middle;
          }
          .password-input,
          .confirm-input,
          .user-input {
            width: 100%;
          }
        }
        .login-btn {
          display: flex;
          justify-content: space-between;
          button {
            display: block;
            margin: 0 auto;
            width: 100%;
            height: 35px;
            line-height: 35px;
            outline: none;
            border: none;
            color: #fff;
            background-color: skyblue;
            cursor: pointer;
            border-radius: 5px;
          }
          button:nth-child(1) {
            margin-right: 10px;
          }
          button:nth-child(2) {
            margin-left: 10px;
          }
        }
      }
    }
    .register-box {
      .login-form {
        .form-item {
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>
