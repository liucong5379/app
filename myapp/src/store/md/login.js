export default {
  namespaced: true,
  state: {
    // 登录状态 --- 避免重新刷新页面时 状态丢失
    loginstate: localStorage.getItem('loginstate') || 'no'
  },
  actions: {},
  mutations: {
    changeLoginState (state, data) {
      state.loginstate = data
    }
  }
}
