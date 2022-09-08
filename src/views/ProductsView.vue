<template>
<SidebarMenu :menu="menu" />

    <main>
        <h1>Products</h1>
    </main>

</template>

<script>
import menu from '../components/menu'
import { SidebarMenu } from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

export default {
    components:{
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
main {
    margin-left: 300px;
    padding: 20px;
} 
</style>