<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
        <div class="container">

            <h1>
                <router-link class="navbar-brand fw-bold fs-2" to="/"><span class="text-info">Auth</span></router-link>
            </h1>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">

                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Login</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link" to="/register">Register</router-link>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
</div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>