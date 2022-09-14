<template>
<SidebarMenu :menu="menu" />

<main>
    <h1>Dashboard</h1>
    <!-- <Card icon="fa-solid fa-shop" title="Products" :count="productsCount" />
    <Card icon="fa-brands fa-shopify" title="Orders" :count="ordersCount" />
    <Card icon="fa-solid fa-users" title="Users" :count="usersCount" /> -->
    <div class="row">
        <div class="col-md-3">
            <Card icon="fa-solid fa-shop" title="Products" :count="productsCount" />
        </div>
        <div class="col-md-3">
            <Card icon="fa-brands fa-shopify" title="Orders" :count="ordersCount" />
        </div>
        <div class="col-md-3">
            <Card icon="fa-solid fa-users" title="Users" :count="usersCount" />
        </div>
        <div class="col-md-3">
            <Card icon="fa-solid fa-users" title="Income" :count="income" />
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
import axiosInstance from '@/axios'
import Card from '../components/Card'

export default {
    components: {
        SidebarMenu,
        Card
    },
    data() {
        return {
            menu,
            ordersCount: '',
            productsCount: '',
            usersCount: '',
            income: ''
        }
    },
    mounted() {
        this.getTotalCount()
    },
    methods: {
        async getTotalCount() {
            const response = await axiosInstance.get('/statistics')

            this.ordersCount = response.data.ordersCount
            this.productsCount = response.data.productsCount
            this.usersCount = response.data.usersCount
            this.income = response.data.income
        }
    }
}
</script>

<style scoped>
main {
    margin-left: 300px;
    padding: 20px;
}
</style>
