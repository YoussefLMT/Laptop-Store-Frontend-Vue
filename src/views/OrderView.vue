<template>
<NavBar />

<div class="container mt-5">
    <table class="table">
        <tbody>
            <tr>
                <th scope="col">Amount</th>
                <td>{{ amount }}DH</td>
            </tr>
            <tr>
                <th scope="col">Shipment</th>
                <td>50DH</td>
            </tr>
            <tr>
                <th scope="col">Total Amount</th>
                <td>{{ amount+50 }}DH</td>
            </tr>
        </tbody>
    </table>
    <div class="row">
        <div class="col-6 mx-auto">
            <form>
                <div class="mb-3">
                    <label for="address" class="form-label">Address</label>
                    <input type="text" class="form-control" id="address">
                </div>
                <div class="mb-3">
                    <label for="city" class="form-label">City</label>
                    <input type="text" class="form-control" id="city">
                </div>
                <button type="button" class="btn btn-primary">Order</button>
            </form>
        </div>
    </div>
</div>
<Footer />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import axiosInstance from '@/axios'

export default {
    components: {
        NavBar,
        Footer
    },
    data(){
        return{
            amount:''
        }
    },
    mounted(){
        this.getOrderTotalPrice()
    },
    methods:{
        async getOrderTotalPrice(){
            const response = await axiosInstance.get('/total-price')
            this.amount = response.data.total_price
        }
    }
}
</script>

<style scoped>
.container {
    width: 700px;
    margin-top: 100px;
    padding: 50px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
