<template>
<NavBar />
<div class="container">
    <div class="row">
        <div class="contact">
            <div class="w3-container" id="contact">
                <h2 class="text-center mb-3">Contact us</h2>
                <p>If you have any questions, do not hesitate to ask them.</p>
                <i class="fa fa-map-marker w3-text-blue mb-2" style="width: 30px"></i>
                Chicago, US<br>
                <i class="fa fa-phone w3-text-blue mb-2" style="width: 30px"></i>
                Phone: +00 151515<br><i class="fa fa-envelope w3-text-blue mb-3" style="width: 30px"> </i>
                Email: mail@mail.com<br>
                <form>
                    <input type="text" name="current_user" value='<%= session.getAttribute( "Username" ) %>' style="display: none;">
                    <p><input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Email" required name="Email"></p>
                    <p>
                        <input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Message" required name="Message">
                    </p>
                    <p>
                        <button class="w3-button w3-black w3-padding-large" type="button">SEND MESSAGE</button>
                    </p>
                </form>
            </div>
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
.contact {
    margin: 0 auto;
    margin-top: 90px;
    padding: 20px;
    border-radius: 10px;
    width: 600px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
