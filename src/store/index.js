import { createStore } from 'vuex'
import axiosInstance from '../axios'

export default createStore({
  state: {
    user:{
        token: localStorage.getItem('token'),
        role: localStorage.getItem('role')
    },
    products: [],
    latest_products: [],
    home_products: [],
    loading: false
  },
  getters: {
    products(state) {
      return state.products
    },

    latestProducts(state) {
      return state.latest_products
    },

    homeProducts(state) {
      return state.home_products
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
    },

    getLatestProducts(state, latest_products) {
      state.latest_products = latest_products
    },

    getHomeProducts(state, home_products) {
      state.home_products = home_products
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
    },
    

    getSpecificProducts({ commit }) {
      commit('setLoading', true)

      axiosInstance.get('/specific-products')
        .then(response => {
          commit('getLatestProducts', response.data.latest_products)
          commit('getHomeProducts', response.data.home_products)
          commit('setLoading', false)
        })
        .catch(error => console.log(error))
    }
  },
  modules: {

  }
})