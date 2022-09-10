<template>
<SidebarMenu :menu="menu" @update:collapsed="onToggleCollapse" />

    <main :class="{ 'mll': collapsed }">
        <h1>Users</h1>

    </main>
</template>

<script>
import menu from '../components/menu'
import {
    SidebarMenu
} from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

export default {
    components: {
        SidebarMenu
    },
    data(){
        return{
            menu
        }
    }
}
</script>

<style scoped>

</style>