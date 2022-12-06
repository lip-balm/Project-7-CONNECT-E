import { createStore } from 'vuex'
import VuexPersist from 'vuex-persist';

const vuexLocalStorage = new VuexPersist({
  storage: window.localStorage,
})

export default createStore({
  // plugins: [VuexPersist({
  //   storage: window.sessionStorage,
  // })],
  plugins: [vuexLocalStorage.plugin],
  state: {

  },
  getters: {
    getToken() {
      return localStorage.getItem('token');
    },
    getEmployeeId() {
      return JSON.parse(localStorage.getItem('employeeID'));
    },
  },
  mutations: {
    setToken(state, value) {
      localStorage.setItem('token', value);
    },
    setEmployeeId(state, value) {
      localStorage.setItem('employeeID', JSON.stringify(value));
    },
    signout() {
      sessionStorage.clear()
      localStorage.clear()
      location.reload()
    }
  },
  actions: {
    setToken(context, value) {
      context.commit('setToken', value);
    },
    setEmployeeId(context, value) {
      context.commit('setEmployeeId', value);
    },
  },
  modules: {
  }
})
