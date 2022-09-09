<template>
<div class="home">
    <NavBar />

    <div class="container">
        <div class="row">
            <div class="col-md-6 left-side">
                <h2><span class="text-info">Lap</span>Tech</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ab nostrum commodi vero voluptas sapiente facilis iste soluta
                    maxime! Quaerat, sit odio? Totam accusamus provident ad eos dolorum
                    fuga non id.
                </p>
                <button type="button" class="btn btn-primary">Shop Now</button>
            </div>

            <div class="col-md-6">
                <div class="image d-none d-sm-block">
                    <img src="@/assets/laptop.png">
                </div>
            </div>
        </div>

        <div class="row cards">
            <div class="col-md-4 card">
                <img src="@/assets/delivery.png">
                <p>Free Shipping</p>
            </div>
            <div class="col-md-4 card">
                <img src="@/assets/order.png">
                <p>Online Order</p>
            </div>
            <div class="col-md-4 card">
                <img src="@/assets/products.png">
                <p>Awesome Prducts</p>
            </div>
        </div>

        <h2 class="text-center latest-products">Latest Products</h2>

        <div class="row">
            <div class="col-md-3">
                <Product :image="'http://127.0.0.1:8000/uploads/images/1662718859.png'" name="test" price="300" description="test" />
            </div>
            <div class="col-md-3">
                <Product :image="'http://127.0.0.1:8000/uploads/images/1662718859.png'" name="test" price="300" description="test" />
            </div>
            <div class="col-md-3">
                <Product :image="'http://127.0.0.1:8000/uploads/images/1662718859.png'" name="test" price="300" description="test" />
            </div>
            <div class="col-md-3">
                <Product :image="'http://127.0.0.1:8000/uploads/images/1662718859.png'" name="test" price="300" description="test" />
            </div>
        </div>

    </div>
</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Product from '@/components/Product.vue'

export default {
    name: 'HomeView',
    components: {
        NavBar,
        Product
    }
}
</script>

<style scoped>
.image {
    width: 480px;
    margin-left: 130px;
    margin-top: 50px;
}

.image img {
    width: 100%;
}

.left-side {
    margin-top: 150px;
}

h2 {
    font-weight: bold;
    font-size: 50px;
}

p {
    font-size: 18px;
    margin-top: 20px;
}

.btn-primary {
    border-radius: 20px;
    font-weight: bold;
    margin-top: 15px;
}

.cards {
    margin-top: 120px;
    display: flex;
    justify-content: space-around;
}

.card {
    width: 300px;
    height: 300px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.card img {
    width: 100%;
    height: 100%;
}

.card p {
    text-align: center;
    font-weight: bold;
    background: #0B5ED7;
    padding: 10px;
    border-radius: 5px;
    color: white;
}

.card:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.latest-products {
    margin-top: 100px;
    margin-bottom: 100px;
}
</style>
