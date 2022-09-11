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
            <button class="btn btn-primary">Add Product To Cart</button>
            <br><br>
            <button class="btn btn-primary">Buy Product</button><br><br>
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
}
</script>

<style scoped>
.details-img {
    height: 300px;
}
</style>
