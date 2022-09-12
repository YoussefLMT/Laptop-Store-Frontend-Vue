<template>
<NavBar />

<div class="container mt-5">
    <h3>Walcome in your cart</h3>

    <div v-if="loading" class="text-center mb-5">
        <h3>Loading...</h3>
    </div>

    <div v-else>
        <div v-if="cartProductsLenth === 0" class="empty-cart mt-5">
            <div class="row">
                <div class="col-md-">
                    <img src="@/assets/empty_cart.png">
                    <h3>Your cart is currently empty</h3>
                    <router-link to="/shop" class="btn btn-warning mt-3">Return To Shop</router-link>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12 col-md-6 col-lg-4" v-for="product in cartProducts" :key="product.id">
                <a href="/#" class="btn btn-primary">Order Now</a><br><br>

                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" :src="'http://127.0.0.1:8000/' + product.image">
                    <div class="card-body">
                        <h5 class="card-title">{{ product.name }}</h5>
                        <p class="card-text">{{ product.price }}DH</p>
                        <button @click="removeProduct(product.cart_id)" class="btn btn-warning">Remove From Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
<Footer />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import store from '@/store'
import axiosInstance from '@/axios'
import Swal from 'sweetalert2'

export default {
    components: {
        NavBar,
        Footer
    },
    mounted() {
        store.dispatch('getCartProducts')
    },
    computed: {
        cartProducts() {
            return store.getters.cartProducts
        },
        cartProductsLenth() {
            return this.cartProducts.length
        },
        loading() {
            return store.getters.loading
        }
    },
    methods: {
        async removeProduct(id) {
            const response = await axiosInstance.delete(`/remove-product/${id}`)
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

            if (response.data.status === 200) {

                Toast.fire({
                    icon: 'success',
                    title: response.data.message
                })

                store.dispatch('getCartProducts')

            } else if (response.data.status === 404) {

                Toast.fire({
                    icon: 'error',
                    title: response.data.message
                })

                store.dispatch('getCartProducts')
            }
        }
    }
}
</script>

<style scoped>
.empty-cart {
    width: 300px;
    margin: 0 auto;
}

.empty-cart img {
    width: 100%;
}
</style>
