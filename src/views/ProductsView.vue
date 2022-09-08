<template>
<SidebarMenu :menu="menu" />

    <main>
        <h1>Products</h1>
         <div class="card products" style="width: 1000px;">
            <div class="card-header">
                Products Managment

               
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
    </main>

</template>

<script>
import menu from '../components/menu'
import { SidebarMenu } from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

export default {
    components:{
        SidebarMenu
    },
    data(){
        return{
            menu
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

img{
    width: 50px;
}
</style>