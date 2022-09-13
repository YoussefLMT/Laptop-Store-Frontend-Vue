<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
        <div class="container">

            <h1>
                <router-link class="navbar-brand fw-bold fs-2" to="/"><span class="text-info">Lap</span>Tech</router-link>
            </h1>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">

                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/shop">Shop</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contact">Contact</router-link>
                    </li>

                    <div v-if="!this.$store.state.user.token" class="d-flex">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/login">Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/register">Register</router-link>
                        </li>
                    </div>

                    <div v-else class="d-flex">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/cart">Cart ({{cart_count}})</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/my-orders">My Orders</router-link>
                        </li>
                        <li class="nav-item">
                            <button type="button" @click="logOut" class="btn btn-danger">Log Out</button>
                        </li>
                    </div>

                    <li class="nav-item" v-if="this.$store.state.user.role === 'admin'">
                        <router-link class="nav-link" to="/dashboard">Dahboard</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
</template>

<script>
import axiosInstance from '../axios'
import Swal from 'sweetalert2'

export default {
    data(){
        return{
            cart_count: ''
        }
    },
    mounted(){
        this.getCartCount()
    },
    methods: {
        async logOut() {
            try {
                const response = await axiosInstance.post("/logout")
                if (response.data.status === 200) {

                    localStorage.removeItem('token')
                    localStorage.removeItem('role')

                    Swal.fire({
                        title: 'success',
                        text: response.data.message,
                        icon: 'success',
                    })

                    this.$router.push('/login')

                }
            } catch (error) {}
        },

        async getCartCount(){
            const response = await axiosInstance.get('/cart-count')
            this.cart_count = response.data.cart_count
        }
    }
}
</script>

<style scoped>

</style>
