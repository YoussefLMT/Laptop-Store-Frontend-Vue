<template>
<SidebarMenu :menu="menu" @update:collapsed="onToggleCollapse" />

<main :class="{ 'mll': collapsed }">
    <h1>Users</h1>
    <div class="card users" style="width: 900px;">
        <div class="card-header">
            Users Managment

        </div>
        <div class="card-body">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">email</th>
                        <th scope="col">role</th>
                        <th scope="col">actions</th>
                    </tr>
                </thead>
                <div v-if="loading" class="spinner">
                    <h3>Loading...</h3>
                </div>
                <tbody v-else v-for="user in users" :key="user.id">
                    <tr>
                        <th scope="row">{{ user.id }}</th>
                        <td>{{ user.name }}</td>
                        <td>{{ user.email}}</td>
                        <td>{{ user.role}}</td>
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
        store.dispatch('getUsers')
    },
    computed: {
        users() {
            return store.getters.users
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
}

.users {
    margin: 50px auto;
}

.mll {
    margin-left: 70px;
}
</style>
