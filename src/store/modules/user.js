import { login, getInfo, logout } from '@/api/auth'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    info: null
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
      setToken(token)
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_INFO: (state, info) => {
      state.info = info
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      userInfo.username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(userInfo).then(response => {
      	  const data = response.data
          commit('SET_TOKEN', data.token || '')
          setUserInfo(data.info, commit)

          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
	// 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo().then(response => {
          if(response.status == 200000){
              setUserInfo(response.data, commit)
          } else {
              clearUserInfo(commit)
          }

          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
	// 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
  	 })
    },
  }
}

export const logOut = (commit) => {
  commit('SET_TOKEN', '')
  // removeToken()
}

export const setUserInfo = (res, commit) => {
  commit('SET_INFO', res)
  commit('SET_NAME', res.username)
  commit('SET_AVATAR', res.icon || '/static/images/smartisan_4ada7fecea.png')
}

export const clearUserInfo = (commit) => {
  commit('SET_INFO', null)
  commit('SET_NAME', null)
  commit('SET_AVATAR', null) 
}

export default user