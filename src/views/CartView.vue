<template>
<NavBar />

<div class="container mt-5">
    <h3>Walcome in your cart</h3>

    <div v-if="loading" class="text-center mb-5">
        <h3>Loading...</h3>
    </div>
    
    <div v-else>
        <!-- <div class="row">
        <div class="col-md-3 mb-5" > -->
        <div v-for="product in cartProducts" :key="product.id">
            <!-- <img class="card-img-top" :src="'http://127.0.0.1:8000/' + product.image">
                <div class="card-body">
                    <h5 class="card-title">{{ product.name }}</h5>
                    <div class="d-flex justify-content-between">
                        <p class="card-text">{{ product.description }}</p>
                        <p class="card-text mr-4 text-success">{{ product.price }}$</p>
                    </div>
                </div> -->
            <img :src="'http://127.0.0.1:8000/' + product.image">
            <h5 >{{ product.name }}</h5>
            <div>
                <p >{{ product.description }}</p>
                <p >{{ product.price }}$</p>
            </div>
        </div>
        <!-- </div>
    </div> -->
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
