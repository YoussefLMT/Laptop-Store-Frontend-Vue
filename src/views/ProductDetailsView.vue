<template>
<NavBar />

<div class="container mt-5">
    <div v-if="loading" class="text-center mb-5">
        <h3>Loading...</h3>
    </div>
    <div v-else class="row">
        <div class="col-md-6">
            <img class="details-img" :src="'http://127.0.0.1:8000/' + product.image">
        </div>
        <div class="col-md-6">
            <router-link to="/">Go Back</router-link><br><br>
            <h5>{{ product.name }}</h5>
            <p>Price: {{ product.price }}$</p>
            <p>Description: {{ product.description }}</p><br>
            <button @click="addTocart" class="btn btn-primary">Add Product To Cart</button>
        </div>
    </div>
</div>

<Footer />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import store from '@/store'
import axiosInstance from '../axios'
import Swal from 'sweetalert2'

export default {
    components: {
        NavBar,
        Footer
    },
    mounted() {
        store.dispatch('getProduct', this.$route.params.id)
    },
    computed: {
        product() {
            return store.getters.product
        },
        loading() {
            return store.getters.loading
        }
    },
    methods: {
        async addTocart() {
            if (!localStorage.getItem('token')) {
                this.$router.push('/login')

                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'error',
                    title: 'Please login first'
                })

            } else {
                const response = await axiosInstance.post(`add-to-cart/${this.$route.params.id}`)

                if (response.data.status === 406) {

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 2000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })

                    Toast.fire({
                        icon: 'error',
                        title: response.data.message
                    })

                } else if (response.data.status === 200) {

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 2000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })

                    Toast.fire({
                        icon: 'success',
                        title: response.data.message
                    })
                }
            }

        }
    }
}
</script>

<style scoped>
.details-img {
    height: 300px;
}
</style>
