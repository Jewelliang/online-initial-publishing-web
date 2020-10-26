import { login, getAllUserInfo } from '@/api/login'// 引入登录 api 接口

const user = {
  state: {
    userInfo: {}
  },
  mutations: {
    setUserInfo (state, info) {
      state.userInfo = info
      sessionStorage.setItem('user', JSON.stringify(info))
    }
  },
  actions: {
    // 登录
    Login ({ commit }, userInfo) { // 定义 Login 方法，在组件中使用 this.$store.dispatch("Login") 调用
      const username = userInfo.username
      return new Promise((resolve, reject) => { // 封装一个 Promise
        login(username, userInfo.password).then(response => { // 使用 login 接口进行网络请求
          commit('setUserInfo', userInfo) // 提交一个 mutation，通知状态改变
          resolve(response) // 将结果封装进 Promise
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取所有用户
    getAllUserInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        getAllUserInfo().then(response => {
          commit('')
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    //编辑用户信息
    updateUserById ({ commit }, userInfo) {
      // const username = userInfo.username
      // const truename = userInfo.truename
      // const position = userInfo.position
      // const publicationName = userInfo.publicationName
      // const role = userInfo.role
      // const editorialBoard = userInfo.editorialBoard
      return new Promise((resolve, reject) => {
        updateUserById(userInfo).then(response => {
          commit(userInfo)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
}
export default user
