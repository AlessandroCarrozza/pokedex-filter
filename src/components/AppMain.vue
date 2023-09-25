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
    <main>
        <div class="d-flex flex-wrap justify-content-center">
            <SingleCard></SingleCard>
        </div>
    </main>
</template>

<style scoped lang="scss"></style>