import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)
const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

import { getToken, setToken, removeToken } from '@/utils/auth'

const store = new Vuex.Store({
  modules,
  getters,
  state: {
    count: isNaN(getToken())?0:getToken(),
    bankInf: {"name":"我是vuex的第一个数据","id":100,"bankName":"中国银行"}
  },
  //更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
  //this.$store.commit("increment"), 来修改。
  mutations: {
    increment (state) {
      state.count++
    },
    subt (state) {
      state.count--
    },
    newBankName(state,msg) {
      state.bankInf.bankName = msg;
    },

    SET_TOKEN: (state, token) => {
      state.token = token
    },

  },
  actions: {
    increment (context) {
      context.commit('increment')

      let num = context.state.count;


      context.commit('SET_TOKEN', num)
    },
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 5000)
    }
  }
})

export default store