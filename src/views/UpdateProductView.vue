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
                </div>
                <div class="mb-3">
                    <label for="lname" class="form-label">Price</label>
                    <input type="text" class="form-control" id="lname" v-model="product.price">
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Quantity</label>
                    <input type="text" class="form-control" id="email" v-model="product.quantity">
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <textarea class="form-control" id="description" rows="3" v-model="product.description"></textarea>
                </div>
                <button type="button" class="btn btn-primary">Update Product</button>
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
