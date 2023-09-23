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
            let pokemon = [];
            fetch('../public/pokemon-json/pokedex.json') // il file.json, per far funzionare la fetch, deve assolutamente stare nella cartella public
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    pokemon = data;
                    console.log(pokemon);
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
