<template>
<SidebarMenu :menu="menu" @update:collapsed="onToggleCollapse" />

<main :class="{ 'mll': collapsed }">
    <h2>Update order status</h2>
    <div class="card up-order" style="width: 1000px;">
        <div class="card-header">
            Orders Managment
        </div>
        <div class="card-body">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <form>
                            <select class="form-select">
                                <option disabled selected>Select Status</option>
                                <option value="1">pending</option>
                                <option value="2">in progress</option>
                                <option value="3">shipping</option>
                                <option value="3">shipped</option>
                            </select>
                        </form>
                    </div>
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

export default {
    components: {
        SidebarMenu
    },
    data() {
        return {
            menu,
            collapsed: false
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

.up-order {
    margin: 0 auto;
    margin-top: 100px;
}
</style>
