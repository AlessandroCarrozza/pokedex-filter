<script>
import { store } from "../store";
import SingleCard from "./SingleCard.vue";
import AppFilter from "./AppFilter.vue";
export default {
    name: 'AppMain',
    components: {
        SingleCard,
        AppFilter,
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
        <AppFilter></AppFilter>
        <div class="d-flex flex-wrap justify-content-center">
            <SingleCard></SingleCard>
        </div>
    </main>
</template>

<style scoped lang="scss">
main {
    padding-top: 100px;
}
</style>