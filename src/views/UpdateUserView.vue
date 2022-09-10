<template>
<SidebarMenu :menu="menu" @update:collapsed="onToggleCollapse" />
<main>
    <h3>Update User</h3>
    <div class="card users" style="width: 800px;">
        <div class="card-header">
            Users Managment
        </div>
        <div class="card-body">
            <form>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" v-model="user.name">
                    <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" v-model="user.email">
                    <span class="text-danger" v-if="errors.email">{{ errors.email[0] }}</span>
                </div>
                <div class="mb-3">
                    <label for="passowrd" class="form-label">New Password</label>
                    <input type="passowrd" class="form-control" id="passowrd" v-model="user.password">
                    <span class="text-danger" v-if="errors.role">{{ errors.role[0] }}</span>
                </div>
                <div class="mb-3">
                    <label class="form-label">Role</label>
                    <select class="form-select" v-model="user.role">
                        <option value="user">user</option>
                        <option value="admin">admin</option>
                    </select>
                    <span class="text-danger" v-if="errors.role">{{ errors.role[0] }}</span>
                </div>
                <button type="button" @click="updateUser" class="btn btn-primary">Update User</button>
            </form>
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
import axiosInstance from '../axios'
import Swal from 'sweetalert2'

export default {
    components: {
        SidebarMenu
    },
    data() {
        return {
            menu,
            collapsed: false,
            user: {
                name: '',
                email: '',
                password: '',
                role: ''
            },
            errors: ''
        }
    },
    mounted() {
        this.getUser()
    },
    methods: {
        onToggleCollapse(collapsed) {
            if (collapsed) {
                this.collapsed = true
            } else {
                this.collapsed = false
            }
        },

        async getUser() {
            try {
                const response = await axiosInstance.get(`/get-user/${this.$route.params.id}`)
                this.user = response.data.user
            } catch (error) {
                console.log(error)
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

.users {
    margin: 20px auto;
}

.mll {
    margin-left: 70px;
}
</style>
