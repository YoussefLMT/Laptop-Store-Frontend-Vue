<template>
<div class="shop">
    <NavBar />
    <div class="container mt-5">
        <h2 class="text-center mb-5">All Our Products</h2>
        <div class="row">
            <div v-if="loading" class="text-center mb-5">
                <h3>Loading...</h3>
            </div>

            <div class="row" v-else>
                <div class="col-md-3 mb-5" v-for="product in products" :key="product.id">
                    <Product :image="'http://127.0.0.1:8000/' + product.image" :name="product.name" :price="product.price" :description="product.description" :stock="product.quantity" :id="product.id"/>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Product from '@/components/Product.vue'
import Footer from '@/components/Footer.vue'
import store from '@/store'

export default {
    components: {
        NavBar,
        Product,
        Footer
    },
    mounted() {
        store.dispatch('getProducts')
    },
    computed: {
        products() {
            return store.getters.products
        },
        loading() {
            return store.getters.loading
        }
    },
}
</script>

<style >

</style>
