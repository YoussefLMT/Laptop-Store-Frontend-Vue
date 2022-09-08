<template>
<SidebarMenu :menu="menu" />

<main>
    <h1>Products</h1>
    <div class="card products" style="width: 1000px;">
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
                <tbody>
                    <tr>
                        <th scope="row">test</th>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td><img src="@/assets/laptop.png"></td>
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
                        <div class="mb-3">
                            <label for="fname" class="form-label">Name</label>
                            <input type="text" class="form-control" id="fname" v-model="product.name">
                        </div>
                        <div class="mb-3">
                            <label for="price" class="form-label">Price</label>
                            <input type="text" class="form-control" id="price" v-model="product.price">
                        </div>
                        <div class="mb-3">
                            <label for="quantity" class="form-label">Quantity</label>
                            <input type="text" class="form-control" id="quantity" v-model="product.quantity">
                        </div>
                        <div class="mb-3">
                            <label for="description" class="form-label">Description</label>
                            <textarea class="form-control" id="description" rows="3" v-model="product.description"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="image" class="form-label">Image</label>
                            <input class="form-control" type="file" id="image">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
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
            product: {
                name: '',
                price: '',
                quantity: '',
                description: '',
                image: ''
            }
        }
    }
}
</script>

<style scoped>
main {
    margin-left: 300px;
    padding: 20px;
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
</style>
