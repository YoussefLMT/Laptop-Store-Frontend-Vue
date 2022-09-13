<template>
<NavBar />

<div class="container mt-5">
    <h3>My Orders</h3><br><br>
    <div v-if="loading" class="text-center mb-5">
        <h3>Loading...</h3>
    </div>
    <div class="row" v-else v-for="order in orders" :key="order.id">
        <div class="col-sm-3">
            <div class="card mb-3" style="width: 18rem;">
                <img class="card-img-top" :src="'http://127.0.0.1:8000/' + order.image">
                <div class="card-body">
                    <h5 class="card-title">{{ order.name }}</h5>
                    <p class="card-text">{{ order.price }}$</p>
                </div>
            </div>
        </div>
        <div class="col-sm-4 ml-5">
            <p>Address: {{ order.address }}</p>
            <p>City: {{ order.city }}</p>
            <p class="badge text-bg-warning">Status: {{ order.status }}</p>
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
        store.dispatch('getOrders')
    },
    computed: {
        orders() {
            return store.getters.orders
        },
        loading() {
            return store.getters.loading
        }
    },
}
</script>

<style scoped>
p {
    font-size: 15px;
    font-weight: bold;
}

.card {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
