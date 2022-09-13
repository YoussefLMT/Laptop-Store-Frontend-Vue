<template>
<NavBar />

<div class="container mt-5">
    <h3>My Orders</h3><br><br>
    <div class="row">
        <div class="col-sm-3">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="@/assets/laptop.png">
                <div class="card-body">
                    <h5 class="card-title">test</h5>
                    <p class="card-text">300$</p>
                </div>
            </div>
        </div>
        <div class="col-sm-4 ml-5">
            <p>address: test</p>
            <p>city: test</p>
            <p>Status: test</p>
        </div>
    </div>
</div>

<Footer />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
    components: {
        NavBar,
        Footer
    },
}
</script>

<style scoped>

</style>
