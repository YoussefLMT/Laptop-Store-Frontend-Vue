import { createStore } from 'vuex'
import axiosInstance from '../axios'

export default createStore({
  state: {
    user:{
        token: localStorage.getItem('token'),
        role: localStorage.getItem('role')
    },
    products: [],
    loading: false
  },
  getters: {
    products(state) {
      return state.products
    },

    loading(state) {
      return state.loading
    }
  },
  mutations: {
    setUserRole(state, role){
      state.user.role = role
    },

    setLoading(state, loading) {
      state.loading = loading
    },

    getProducts(state, products) {
      state.products = products
    }
  },
  actions: {
    getProducts({ commit }) {
      commit('setLoading', true)

      axiosInstance.get('/products')
        .then(response => {
          commit('getProducts', response.data.products)
          commit('setLoading', false)
        })
        .catch(error => console.log(error))
    }
  },
  modules: {

  }
})