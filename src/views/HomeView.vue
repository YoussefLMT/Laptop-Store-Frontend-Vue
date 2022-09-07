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
    </div>
</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
    name: 'HomeView',
    components: {
        NavBar,
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

.left-side{
  margin-top: 150px;
}

h2 {
    font-weight: bold;
    font-size: 50px;
}

p{
  font-size: 18px;
  margin-top: 20px;
}

.btn-primary{
  border-radius: 20px;
  font-weight: bold;
  margin-top: 15px;
}
</style>
