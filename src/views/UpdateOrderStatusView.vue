<template>
<SidebarMenu :menu="menu" @update:collapsed="onToggleCollapse" />

<main :class="{ 'mll': collapsed }">
    <h2>Update order status</h2>
    <div class="card up-order" style="width: 600px;">
        <div class="card-header">
            Orders Managment
        </div>
        <div class="card-body">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 mx-auto">
                        <form>
                            <label class="mb-3">Select Status</label>
                            <select class="form-select" v-model="status">
                                <option value="pending">pending</option>
                                <option value="in progress">in progress</option>
                                <option value="shipping">shipping</option>
                                <option value="shipped">shipped</option>
                            </select>
                            <button type="button" @click="updateOrderStatus" class="btn btn-primary mt-3">Save changes</button>
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
import axiosInstance from '@/axios'
import Swal from 'sweetalert2'

export default {
    components: {
        SidebarMenu
    },
    data() {
        return {
            menu,
            collapsed: false,
            status: ''
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

        async updateOrderStatus() {
            const response = await axiosInstance.put(`/update-order-status/${this.$route.params.id}`, {
                status: this.status
            })

            if (response.data.status === 200) {

                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                })

                Toast.fire({
                    icon: 'success',
                    title: response.data.message
                })
            }
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

.up-order {
    margin: 0 auto;
    margin-top: 100px;
}
</style>
