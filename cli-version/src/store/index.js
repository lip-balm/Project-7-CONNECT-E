import { createStore } from 'vuex'

export default createStore({
  state: {
    employeeId:'',
    token:'',
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
    setToken(state, token) {
      localStorage.setItem('token', token);
      state.token = token;
    },
    setEmployeeId(state, employeeID) {
      localStorage.setItem('employeeID', JSON.stringify(employeeID));
      state.employeeId = employeeID;
    },
    signout() {
      sessionStorage.clear()
      localStorage.clear()
      location.reload()
    }
  },
  actions: {
    setToken(context, token) {
      context.commit('setToken', token)
    },
    setEmployeeId(context, employeeID) {
      context.commit('setEmployeeId', employeeID)
    },
  },
  modules: {
  }
})
