<template>
<SidebarMenu :menu="menu" @update:collapsed="onToggleCollapse" />

<main :class="{ 'mll': collapsed }">
    <h1>Orders</h1>
    <div class="card mt-5 orders" style="width: 1000px;">
        <div class="card-header">
            Orders Managment
        </div>
        <div class="card-body">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">user id</th>
                        <th scope="col">address</th>
                        <th scope="col">city</th>
                        <th scope="col">total amount</th>
                        <th scope="col">status</th>
                        <th scope="col">actions</th>
                    </tr>
                </thead>
                <div v-if="loading" class="spinner">
                    <h3>Loading...</h3>
                </div>
                <tbody v-else>
                    <tr v-for="order in allOrders" :key="order.id">
                        <th scope="row">{{ order.id }}</th>
                        <td>{{ order.user_id}}</td>
                        <td>{{ order.address }}</td>
                        <td>{{ order.city }}</td>
                        <td>{{ order.total_amount}}</td>
                        <td class="badge text-bg-warning mt-2">{{ order.status }}</td>
                        <td>
                            <button type="button" @click="getOrderProducts(order.id)" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#getOrderProducts">Products</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!--Order Products Modal -->
    <div class="modal fade" id="getOrderProducts" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Order Products</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="card mb-3" style="width: 18rem;" v-for="orderProduct in order_products" :key="orderProduct.id">
                        <img :src="'http://127.0.0.1:8000/' + orderProduct.image" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">{{ orderProduct.name}}</h5>
                            <p class="card-text">{{ orderProduct.price }}$</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</main>
</template>

<script>
import menu from '../components/menu'
import {
    SidebarMenu
} from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import store from '@/store'
import axiosInstance from '@/axios'

export default {
    components: {
        SidebarMenu
    },
    data() {
        return {
            menu,
            collapsed: false,
            order_products: []
        }
    },
    mounted() {
        store.dispatch('getAllOrders')
    },
    computed: {
        allOrders() {
            return store.getters.allOrders
        },
        loading() {
            return store.getters.loading
        }
    },
    methods: {
        onToggleCollapse(collapsed) {
            if (collapsed) {
                this.collapsed = true
            } else {
                this.collapsed = false
            }
        },

        async getOrderProducts(id) {
            const response = await axiosInstance.get(`get-order-products/${id}`)
            this.order_products = response.data.order_products
        }
    }
}
</script>

<style scoped>
main {
    margin-left: 300px;
    padding: 20px;
    transition: .3s ease-out;
}

.mll {
    margin-left: 70px;
}

.orders {
    margin: 50px auto;
}

img {
    width: 150px;
    margin: 0 auto;
}

.card {
    margin: 0 auto;
}
</style>
