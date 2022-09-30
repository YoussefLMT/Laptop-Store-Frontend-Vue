<template>
<!-- <div class="row"> -->
    <!-- <div class="col-md-4"> -->
        <div class="card">
            <img class="card-img-top" :src="image">
            <div class="card-body">
                <h5 class="card-title">{{ name }}</h5>
                <div class="d-flex justify-content-between">
                    <!-- <p class="card-text">{{ description }}</p> -->
                    <p class="card-text mr-4 text-success">{{ price }}$</p>
                    <p class="card-text mr-4 text-success">In Stock:{{ stock }}</p>

                </div>
                <router-link :to="{ name: 'productDetails', params: {id: id }}" class="btn btn-primary">Show Product</router-link>
            </div>
        </div>
    <!-- </div> -->
<!-- </div> -->
</template>

<script>
export default {
    props: ['image', 'name', 'description', 'price', 'stock', 'id'],
}
</script>

<style scoped>
.card{
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.card:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

img{
    width: 80%;
    margin: 0 auto;
    height: 150px;
}
</style>
