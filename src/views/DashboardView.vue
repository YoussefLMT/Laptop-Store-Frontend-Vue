<template>
<SidebarMenu :menu="menu" />

<main>
    <h1>Dashboard</h1>
</main>
</template>

<script>
import menu from '../components/menu'
import { SidebarMenu } from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import axiosInstance from '@/axios'

export default {
    components:{
        SidebarMenu
    },
    data(){
        return{
            menu
        }
    },
    mounted(){
        this.getTotalCount()
    },
    methods:{
        async getTotalCount(){
            const response = await axiosInstance.get('statistics')
            console.log(response.data)
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
