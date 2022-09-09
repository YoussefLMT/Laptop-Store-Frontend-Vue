<template>
<SidebarMenu :menu="menu" @update:collapsed="onToggleCollapse" />

<main :class="{ 'mll': collapsed }">
    <h1>Products</h1>
    <div class="card products" style="width: 1200px;">
        <div class="card-header">
            Products Managment

            <!-- Button trigger add customer modal -->
            <button type="button" class="btn btn-primary btn-add" data-bs-toggle="modal" data-bs-target="#addProductModal">
                Add Product
            </button>
        </div>
        <div class="card-body">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">price</th>
                        <th scope="col">quantity</th>
                        <th scope="col">description</th>
                        <th scope="col">image</th>
                        <th scope="col">actions</th>
                    </tr>
                </thead>
                <div v-if="loading" class="spinner">
                    <h3>Loading...</h3>
                </div>
                <tbody v-else>
                    <tr v-for="product in products" :key="product.id">
                        <th scope="row">{{ product.id }}</th>
                        <td>{{ product.name }}</td>
                        <td>{{ product.price }}</td>
                        <td>{{ product.quantity }}</td>
                        <td>{{ product.description }}</td>
                        <td><img :src="'http://127.0.0.1:8000/' + product.image"></td>
                        <td>
                            <button type="button" @click="deleteProduct(product.id)" class="btn btn-danger">Delete</button>
                            <router-link :to="{ name: 'updateProduct', params: {id: product.id }}" class="btn btn-warning">Update</router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!--Add Product Modal -->
    <div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                            <label for="fname" class="form-label">Name</label>
                            <input type="text" class="form-control" id="fname" v-model="product.name">
                            <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                        </div>
                        <div class="mb-3">
                            <label for="price" class="form-label">Price</label>
                            <input type="text" class="form-control" id="price" v-model="product.price">
                            <span class="text-danger" v-if="errors.price">{{ errors.price[0] }}</span>
                        </div>
                        <div class="mb-3">
                            <label for="quantity" class="form-label">Quantity</label>
                            <input type="text" class="form-control" id="quantity" v-model="product.quantity">
                            <span class="text-danger" v-if="errors.quantity">{{ errors.quantity[0] }}</span>
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Description</label>
                            <textarea class="form-control" id="description" rows="3" v-model="product.description"></textarea>
                            <span class="text-danger" v-if="errors.description">{{ errors.description[0] }}</span>
                        </div>
                        <div class="mb-3">
                            <label for="image" class="form-label">Image</label>
                            <input class="form-control" @change="onFileSelected" type="file" id="image">
                            <span class="text-danger" v-if="errors.image">{{ errors.image[0] }}</span>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" @click="addNewProduct" class="btn btn-primary">Save changes</button>
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
import axiosInstance from '../axios'
import store from '@/store'

export default {
    components: {
        SidebarMenu
    },
    data() {
        return {
            menu,
            collapsed: false,
            product: {
                name: '',
                price: '',
                quantity: '',
                description: '',
                image: ''
            },
            message: '',
            errors: '',
        }
    },
    mounted() {
        store.dispatch('getProducts')
    },
    computed: {
        products() {
            return store.getters.products
        },
        loading() {
            return store.getters.loading
        }
    },
    methods: {
        onFileSelected(e) {
            this.product.image = e.target.files[0]
        },

        async addNewProduct() {
            const fd = new FormData()
            fd.append('name', this.product.name)
            fd.append('price', this.product.price)
            fd.append('quantity', this.product.quantity)
            fd.append('description', this.product.description)
            fd.append('image', this.product.image)

            try {
                const response = await axiosInstance.post("/add-product", fd)

                if (response.data.status === 200) {
                    this.message = response.data.message
                    store.dispatch('getProducts')
                } else {
                    this.errors = response.data.validation_err
                }

                this.product.name = ''
                this.product.price = ''
                this.product.quantity = ''
                this.product.description = ''

            } catch (error) {
                console.log(error)
            }
        },

        async deleteProduct(id) {
            try {
                await axiosInstance.delete(`/delete-product/${id}`)
                store.dispatch('getProducts')
            } catch (error) {
                console.log(error)
            }
        },

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

.products {
    margin: 50px auto;
}

.btn-add {
    float: right
}

img {
    width: 50px;
}

.mll {
    margin-left: 70px;
}
</style>
