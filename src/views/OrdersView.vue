<template>
<SidebarMenu :menu="menu" @update:collapsed="onToggleCollapse" />

<main :class="{ 'mll': collapsed }">
    <h1>Orders</h1>
    <div class="card orders" style="width: 1200px;">
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
                        <td>{{ order.status }}</td>
                    </tr>
                </tbody>
            </table>
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

export default {
    components: {
        SidebarMenu
    },
    data() {
        return {
            menu,
            collapsed: false,
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
</style>
