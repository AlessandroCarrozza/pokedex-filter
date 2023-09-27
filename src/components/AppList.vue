<script>
import { store } from "../store";
import SingleCard from "./SingleCard.vue";
export default {
    name: 'AppList',
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
    <main>
        <h5 class="text-center m-0">{{ this.store.allPokemon.length }} risultati</h5>
        <div class="d-flex flex-wrap justify-content-center">
            <SingleCard></SingleCard>
        </div>
    </main>
</template>

<style scoped lang="scss">
h5 {
    font-style: italic;
}
</style>