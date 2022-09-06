import { createStore } from 'vuex'

export default createStore({
  state: {
    user:{
        token: localStorage.getItem('token'),
        role: localStorage.getItem('role')
    }
  },
  getters: {
    
  },
  mutations: {
    setUserRole(state, role){
      state.user.role = role
    }
  },
  actions: {

  },
  modules: {

  }
})