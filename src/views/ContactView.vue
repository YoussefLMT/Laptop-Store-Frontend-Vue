<template>
<NavBar />
<div style="width: 75%; min-height: 450px;">
    <div class="w3-container" id="contact">
        <h2>Contact us</h2>
        <p>If you have any questions, do not hesitate to ask them.</p>
        <i class="fa fa-map-marker w3-text-blue" style="width: 30px"></i>
        Chicago, US<br> <i class="fa fa-phone w3-text-blue" style="width: 30px"></i> Phone: +00 151515<br> <i class="fa fa-envelope w3-text-blue" style="width: 30px"> </i> Email:
        mail@mail.com<br>
        <form action="../SendMessageByUser" method="post">
            <input type="text" name="current_user" value='<%= session.getAttribute( "Username" ) %>' style="display: none;">
            <p><input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Email" required name="Email"></p>
            <p>
                <input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Message" required name="Message">
            </p>
            <p>
                <button class="w3-button w3-black w3-padding-large" type="submit">SEND
                    MESSAGE</button>
            </p>
        </form>
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
