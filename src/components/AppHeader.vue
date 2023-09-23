<script>
export default {
    name: 'AppHeader',
}
</script>

<template>
    <header class="position-fixed w-100 z-5">
        <nav class="navbar bg-body-secondary">
            <div class="container-fluid d-flex justify-content-center">
                <a class="navbar-brand mx-5" href="#">Pokèdex</a>
                <img src="../../public/pokeball-logo.png" alt="Logo">
                <a class="navbar-brand mx-5" href="#">Contatti</a>
            </div>
        </nav>
    </header>
</template>

<style scoped lang="scss">
header {
    z-index: 999;

    img {
        height: 70px;
    }
}
</style>