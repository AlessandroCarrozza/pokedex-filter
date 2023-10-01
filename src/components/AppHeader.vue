<script>
export default {
    name: 'AppHeader',
}
</script>

<template>
    <header class="position-fixed w-100 z-5">
        <nav class="navbar bg-body-secondary">
            <div class="container-fluid d-flex justify-content-center">
                <router-link :to="{ name: 'home' }" class="navbar-brand mx-5 p-0" href="#">Pokèdex</router-link>
                <a href="#"><img src="../assets/pokeball-logo.png" alt="Logo"></a>
                <router-link :to="{ name: 'contact' }" class="navbar-brand mx-5 p-0" href="#">Contatti</router-link>
            </div>
        </nav>
    </header>
</template>

<style scoped lang="scss">
header {
    z-index: 999;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    img {
        height: 70px;
    }

    a:hover {
        color: #5A5A5A;
    }
}
</style>