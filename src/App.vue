<script>
import AppHeader from "./components/AppHeader.vue";
import AppFilter from "./components/AppFilter.vue";
import AppList from "./components/AppList.vue";
import { store } from "./store";
import { generateAllPokemon } from "./main";

export default {
    components: {
        AppHeader,
        AppFilter,
        AppList,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        generateAllPokemon() {
            generateAllPokemon(this.store);
        }
    },
    created() {
        this.generateAllPokemon();
    }
}
</script>

<template>
    <AppHeader></AppHeader>
    <router-view></router-view>
</template>

<style></style>
