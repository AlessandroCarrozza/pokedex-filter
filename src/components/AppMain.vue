<script>
import { store } from "../store";
import SingleCard from "./SingleCard.vue";
export default {
    name: 'AppMain',
    components: {
        SingleCard,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <main class="d-flex flex-wrap justify-content-center">
        <SingleCard></SingleCard>
    </main>
</template>

<style scoped lang="scss">
main {
    padding-top: 100px;
}
</style>