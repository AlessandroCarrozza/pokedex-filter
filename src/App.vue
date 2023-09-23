<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import { store } from "./store";

export default {
    components: {
        AppHeader,
        AppMain,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        generateAllPokemon() {
            fetch('../public/pokemon-json/pokedex.json') // il file.json, per far funzionare la fetch, deve assolutamente stare nella cartella public
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    this.store.allPokemon = data;
                    console.log(this.store.allPokemon);
                })
                .catch(err => { });
        }
    },
    created() {
        this.generateAllPokemon();
    }
}
</script>

<template>
    <AppHeader></AppHeader>
    <AppMain></AppMain>
</template>

<style></style>
