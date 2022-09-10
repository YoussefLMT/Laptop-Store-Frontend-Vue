<template>
<NavBar />

<section class="about">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="">
                    <h1>Who we are?</h1>
                    <br>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Numquam iste rerum quidem dolorum eaque assumenda nihil labore
                        eos cupiditate? Eligendi voluptates fugiat numquam quo eveniet
                        nesciunt quam! Expedita, quo fugiat.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Numquam iste rerum quidem dolorum eaque assumenda nihil labore
                        eos cupiditate? Eligendi voluptates fugiat numquam quo eveniet
                        nesciunt quam! Expedita, quo fugiat.
                    </p>
                    <a href="#" class="btn2">Read More</a>
                </div>
            </div>
            <div class="col-md-6">
                <div class="about-col animate__animated animate__backInRight">
                    <img src="@/assets/laptop.png">
                </div>
            </div>

        </div>
    </div>

</section>
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
img {
    width: 100%;
    transition: .8s;
}

img:hover {
    transform: scale(1.1);
}

.btn2 {
    font-size: 18px;
    color: #111;
    background: transparent;
    border: 2px solid #111;
    display: inline-block;
    padding: 10px 30px;
    margin-top: 30px;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 2px;
}

.btn2:hover {
    border: 2px solid #3498db;
    background: #3498db;
    transition: 1s;
}
</style>
