<template>
<NavBar />


<div class="container mt-5">
    <div class="row">
        <div class="col-sm-6">
            <img class="details-img" src="@/assets/laptop.png">
        </div>
        <div class="col-sm-6">
            <a href="/">Go Back</a><br><br>
            <h5>test</h5>
            <p>Price: 500DH</p>
            <p>Description: test</p><br>
            <form >
                <button class="btn btn-primary">Add Product To Cart</button>
            </form>
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

export default {
    components: {
        NavBar,
        Footer
    },
}
</script>

<style scoped>

</style>
