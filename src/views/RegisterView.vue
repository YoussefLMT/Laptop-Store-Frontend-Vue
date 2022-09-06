<template>
<NavBar />

<div class="container">
    <div class="row justify-content-center">
        <div class="col-lg-7">
            <div class="card shadow-lg border-0 rounded-lg mt-5">
                <div class="card-header">
                    <h3 class="text-center font-weight-light my-4">Create Account</h3>
                </div>
                <div class="card-body">
                    <form>
                        <div class="alert alert-success" v-if="message">
                            {{ message }}
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-12">
                                <div class="form-floating mb-3 mb-md-0">
                                    <input class="form-control" v-model="userData.name" id="name" type="text" placeholder="Enter your name" required />
                                    <label for="name">Name</label>
                                    <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="form-floating mb-3">
                            <input class="form-control" v-model="userData.email" id="inputEmail" type="email" placeholder="name@example.com" required />
                            <label for="inputEmail">Email address</label>
                            <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
                        </div>
                        <div class="row mb-3">
                            <div class="col-md-12">
                                <div class="form-floating mb-3 mb-md-0">
                                    <input class="form-control" v-model="userData.password" id="inputPassword" type="password" placeholder="Create a password" required />
                                    <label for="inputPassword">Password</label>
                                    <span class="text-danger" v-if="errors.password">{{ errors.password[0] }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4 mb-0">
                            <div class="d-grid"><button type="button" @click="register" class="btn btn-primary btn-block">Create Account</button></div>
                        </div>
                    </form>
                </div>
                <div class="card-footer text-center py-3">
                    <router-link class="small" to="/">Have an account? Go to login</router-link>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import axiosInstance from '../axios'

export default {
    components: {
        NavBar
    },
    data() {
        return {
            userData: {
                name: '',
                email: '',
                password: ''
            },
            message: '',
            errors: ''
        }
    },
    methods: {
        async register() {
            try {
                const response = await axiosInstance.post("/register", this.userData)

                if (response.data.status === 200) {
                    this.message = response.data.message
                    this.userData.name = ''
                    this.userData.email = ''
                    this.userData.password = ''
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
