<template>
<SidebarMenu :menu="menu" @update:collapsed="onToggleCollapse" />
<main>
    <h1>update product</h1>

</main>
</template>

<script>
import menu from '../components/menu'
import {
    SidebarMenu
} from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import axiosInstance from '../axios'

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
    methods:{
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
</style>
