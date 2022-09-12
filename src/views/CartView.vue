<template>
<NavBar />

<div class="container mt-5">
    <h3>Walcome in your cart</h3>

    <div v-if="loading" class="text-center mb-5">
        <h3>Loading...</h3>
    </div>

    <div v-else>
        <a href="/#" class="btn btn-primary">Order Now</a><br><br>
        <div class="row">
            <div class="col-12 col-md-6 col-lg-4" v-for="product in cartProducts" :key="product.id">

                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" :src="'http://127.0.0.1:8000/' + product.image">
                    <div class="card-body">
                        <h5 class="card-title">{{ product.name }}</h5>
                        <p class="card-text">{{ product.price }}DH</p>
                        <button class="btn btn-warning">Remove From Cart</button>
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
        loading() {
            return store.getters.loading
        }
    },
}
</script>

<style scoped>

</style>
