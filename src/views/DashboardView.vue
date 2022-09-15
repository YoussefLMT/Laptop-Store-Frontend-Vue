<template>
<SidebarMenu :menu="menu" @update:collapsed="onToggleCollapse"/>

<main :class="{ 'mll': collapsed }">
    <h1>Dashboard</h1>
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
            <Card icon="fa-solid fa-dollar-sign" title="Income" :count="income" />
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-6">
                  <BarChart />
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
import axiosInstance from '@/axios'
import Card from '../components/Card'
import BarChart from '../components/BarChart'

export default {
    components: {
        SidebarMenu,
        Card,
        BarChart
    },
    data() {
        return {
            menu,
            collapsed: false,
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
        },

        onToggleCollapse(collapsed) {
            if (collapsed) {
                this.collapsed = true
            } else {
                this.collapsed = false
            }
        },
    }
}
</script>

<style scoped>
main {
    margin-left: 300px;
    padding: 20px;
}

.mll {
    margin-left: 70px;
}
</style>
