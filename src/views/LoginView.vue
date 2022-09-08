<template>
<NavBar />

<div class="container">
    <div class="row justify-content-center">
        <div class="col-lg-5">
            <div class="card shadow-lg border-0 rounded-lg mt-5">
                <div class="card-header">
                    <h3 class="text-center font-weight-light my-4">Login</h3>
                </div>
                <div class="card-body">
                    <form>
                        <div class="alert alert-danger" v-if="message">
                            {{ message }}
                        </div>
                        <div class="form-floating mb-3">
                            <input class="form-control" v-model="userData.email" type="email" name="email" placeholder="name@example.com" />
                            <label for="inputEmail">Email address</label>
                            <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
                        </div>
                        <div class="form-floating mb-3">
                            <input class="form-control" v-model="userData.password" type="password" name="pass" placeholder="Password" />
                            <label for="inputPassword">Password</label>
                            <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>
                        </div>

                        <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                            <button class="btn btn-primary" @click="login" type="button">Login</button>
                        </div>
                    </form>
                </div>
                <div class="card-footer text-center py-3">
                    <router-link class="small" to="/register">Need an account? Sign up!</router-link>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import store from '@/store'
import axiosInstance from '../axios'

export default {
    components: {
        NavBar
    },
    data() {
        return {
            userData: {
                email: '',
                password: ''
            },
            message: '',
            errors: ''
        }
    },
    mounted() {
        if (localStorage.getItem('token')) {
            if (localStorage.getItem('role') === 'user') {
                this.$router.push('/')
            } else if (localStorage.getItem('role') === 'admin') {
                this.$router.push('/dashboard')
            }
        }
    },
    methods: {
        async login() {
            try {
                const response = await axiosInstance.post("/login", this.userData)

                if (response.data.status === 401) {
                    this.message = response.data.message

                } else if (response.data.role === 'user') {

                    this.$router.push('/')
                    store.commit('setUserRole', response.data.role)
                    store.state.user.token = response.data.token
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('role', response.data.role)

                } else if (response.data.role === 'admin') {

                    this.$router.push('/dashboard')
                    store.commit('setUserRole', response.data.role)
                    store.state.user.token = response.data.token
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('role', response.data.role)
                } else {
                    this.errors = response.data.validation_err
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<style>
</style>
