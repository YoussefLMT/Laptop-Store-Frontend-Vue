<template>
<SidebarMenu :menu="menu" @update:collapsed="onToggleCollapse" />
<main>
    <h3>Update Product</h3>
    <div class="card pro" style="width: 800px;">
        <div class="card-header">
            Products Managment
        </div>
        <div class="card-body">
            <form>
                <div class="mb-3">
                    <label for="fname" class="form-label">Name</label>
                    <input type="text" class="form-control" id="fname" v-model="product.name">
                    <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>

                </div>
                <div class="mb-3">
                    <label for="lname" class="form-label">Price</label>
                    <input type="text" class="form-control" id="lname" v-model="product.price">
                    <span class="text-danger" v-if="errors.price">{{ errors.price[0] }}</span>

                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Quantity</label>
                    <input type="text" class="form-control" id="email" v-model="product.quantity">
                    <span class="text-danger" v-if="errors.quantity">{{ errors.quantity[0] }}</span>

                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <textarea class="form-control" id="description" rows="3" v-model="product.description"></textarea>
                    <span class="text-danger" v-if="errors.description">{{ errors.description[0] }}</span>

                </div>
                <button type="button" @click="updateProduct" class="btn btn-primary">Update Product</button>
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
            product: {
                name: '',
                price: '',
                quantity: '',
                description: '',
                image: ''
            },
            errors: ''
        }
    },
    mounted() {
        this.getProduct()
    },
    methods: {
        onToggleCollapse(collapsed) {
            if (collapsed) {
                this.collapsed = true
            } else {
                this.collapsed = false
            }
        },

        async getProduct() {
            try {
                const response = await axiosInstance.get(`/get-product/${this.$route.params.id}`)
                this.product = response.data.product
            } catch (error) {
                console.log(error)
            }
        },

        async updateProduct() {
            try {
                const response = await axiosInstance.put(`/update-product/${this.$route.params.id}`, this.product)
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
                } else if (response.data.status === 422) {
                    this.errors = response.data.validation_err
                }
            } catch (error) {
                console.log(error)
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

.pro {
    margin: 20px auto;
}

.mll {
    margin-left: 70px;
}
</style>
