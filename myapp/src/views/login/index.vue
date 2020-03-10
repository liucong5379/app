<template>
  <div class="box">
    <header class="header">登录</header>
    <div class="content">
      <van-form @submit="onSubmit" @failed="onFailed">
        <van-field
          v-model="username"
          name="tel"
          label="手机号"
          placeholder="手机号"
          :rules="[{ required: true,validator: telValidator, message: '请填写正确的手机号' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true,validator: passwordValidator,  message: '请填写正确的密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user.js'
import { mapMutations } from 'vuex'
import Vue from 'vue'
import { Toast } from 'vant'
Vue.use(Toast)

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapMutations({
      changeLoginState: 'login/changeLoginState'
    }),
    // 函数校验返回true 表示检验通过 false表示不通过
    telValidator (val) {
      return /^1\d{10}/.test(val)
    },
    passwordValidator (val) {
      return val.length >= 6
    },
    // 成功
    onSubmit (values) {
      console.log('submit', values)
      login({
        url: '/users/login',
        data: values
      }).then(res => {
        if (res.data.code === '10006') {
          Toast('用户未注册')
        } else if (res.data.code === '10007') {
          Toast('密码错误')
        } else {
          Toast('登陆成功')
          // 保存相关信息至本地 userid token
          // 保存登录状态至状态管理器
          localStorage.setItem('token', res.data.data.token)
          localStorage.setItem('userid', res.data.data.userid)
          localStorage.setItem('loginstate', 'ok')
          // 同时将状态管理器中的登陆状态修改 +++++++++++++
          this.changeLoginState('ok')
          this.$router.back()
        }
      })
    },
    // 失败
    onFailed (errorInfo) {
      console.log('error', errorInfo)
    }
  }
}
</script>

<style>

</style>
