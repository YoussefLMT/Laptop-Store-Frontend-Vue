<template>
<SidebarMenu :menu="menu" @update:collapsed="onToggleCollapse" />

<main :class="{ 'mll': collapsed }">
    <h1>Users</h1>
    <div class="card users" style="width: 900px;">
        <div class="card-header">
            Users Managment

            <!-- Button trigger add user modal -->
            <button type="button" class="btn btn-primary btn-add" data-bs-toggle="modal" data-bs-target="#addUserModal">
                Add User
            </button>
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
                        <td>
                            <button type="button" @click="deleteUser(user.id)" class="btn btn-danger">Delete</button>
                            <router-link :to="{ name: 'updateUser', params: {id: user.id }}" class="btn btn-warning">Update</router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!--Add User Modal -->
    <div class="modal fade" id="addUserModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add New Product</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="alert alert-success" v-if="message">
                            {{ message }}
                        </div>
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
                            <label for="passowrd" class="form-label">Password</label>
                            <input type="passowrd" class="form-control" id="passowrd" v-model="user.password">
                            <span class="text-danger" v-if="errors.passowrd">{{ errors.passowrd[0] }}</span>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Role</label>
                            <select class="form-select" v-model="user.role">
                                <option value="user">user</option>
                                <option value="admin">admin</option>
                            </select>
                            <span class="text-danger" v-if="errors.role">{{ errors.role[0] }}</span>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" @click="addNewUser" class="btn btn-primary">Save changes</button>
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
import store from '@/store'
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
                role: '',
            },
            message: '',
            errors: '',
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

        async addNewUser() {
            try {
                const response = await axiosInstance.post("/add-user", this.user)

                if (response.data.status === 200) {
                    this.message = response.data.message
                    store.dispatch('getUsers')
                } else {
                    this.errors = response.data.validation_err
                }

                this.user.name = ''
                this.user.email = ''
                this.user.password = ''
                this.user.role = ''

            } catch (error) {
                console.log(error)
            }
        },

        async deleteUser(id) {
            try {
                const response = await axiosInstance.delete(`/delete-user/${id}`)
                store.dispatch('getUsers')

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
}

.users {
    margin: 50px auto;
}

.btn-add {
    float: right
}

.mll {
    margin-left: 70px;
}
</style>
