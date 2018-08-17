import { loginByUsername, logout, loginByMobile } from '@/api/login'
// import Cookies from 'js-cookie'

const user = {
  state: {
    userId: '', // 用户ID
    name: '', // 用户名
    avatar: '', // 用户头像
    hasaccount: '', // 是否有账号密码，可能有手机号验证码直接登录未设置账号密码
    mobile: '', // 手机号
    wx: ''// 是否绑定微信号
  },
  mutations: {
    SET_USERINFO: (state, code) => {
      state = {...code}
      // 修改对象或者数组的时候养成用展开运算符的习惯
    }
  },
  actions: {
    // 用户名登录
    LoginByUsername ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        loginByUsername(userInfo.username, userInfo.password).then(response => {
          const data = response.data
          commit('SET_USERINFO', data.userinfo)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    LoginByMobile ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        loginByMobile(userInfo.mobile, userInfo.code).then(response => {
          const data = response.data
          commit('SET_USERINFO', data.userinfo)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    LogOut ({ commit, state }) {
      const emptyuser = {
        userId: '', // 用户ID
        name: '', // 用户名
        avatar: '', // 用户头像
        hasaccount: '', // 是否有账号密码，可能有手机号验证码直接登录未设置账号密码
        mobile: '', // 手机号
        wx: ''// 是否绑定微信号
      }
      return new Promise((resolve, reject) => {
        logout(state.userId).then(() => {
          commit('SET_USERINFO', emptyuser)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
