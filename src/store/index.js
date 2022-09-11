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
    product: [],
    users: [],
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

    users(state) {
      return state.users
    },

    getProduct(state) {
      return state.product
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
    },

    getUsers(state, users) {
      state.users = users
    },

    getProduct(state, product) {
      state.product = product
    },
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
    },

    getUsers({ commit }) {
      commit('setLoading', true)

      axiosInstance.get('/users')
        .then(response => {
          commit('getUsers', response.data.users)
          commit('setLoading', false)
        })
        .catch(error => console.log(error))
    },

    getProduct({ commit },  { id }) {
      commit('setLoading', true)

      axiosInstance.get(`/get-product/${id}`)
        .then(response => {
          commit('getProduc', response.data.product)
          commit('setLoading', false)
        })
        .catch(error => console.log(error))
    },
  },
  modules: {

  }
})