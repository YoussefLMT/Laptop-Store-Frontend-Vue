<template>
<div class="row">
    <div class="col-md-4">
        <div class="card" style="width: 15rem;">
            <img class="card-img-top w-100" :src="image">
            <div class="card-body">
                <h5 class="card-title">{{ name }}</h5>
                <div class="d-flex justify-content-between">
                    <p class="card-text">{{ description }}</p>
                    <p class="card-text mr-4 text-success">{{ price }}$</p>
                </div>
                <a href="/#" class="btn btn-primary">Show Product</a>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['image', 'name', 'description', 'price'],
}
</script>

<style scoped>

</style>
