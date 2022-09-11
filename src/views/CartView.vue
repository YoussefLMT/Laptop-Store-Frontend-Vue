<template>
<NavBar />

<div class="container mt-5">
    <h1>Cart</h1>

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
