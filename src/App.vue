<script>
import AppHeader from "./components/AppHeader.vue";
import AppFilter from "./components/AppFilter.vue";
import AppMain from "./components/AppMain.vue";
import { store } from "./store";

export default {
    components: {
        AppHeader,
        AppFilter,
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
                // .filter(pokemon => pokemon.type.includes('Grass'))
                .then(data => {
                    if (this.store.typeSelected == 'all') {
                        this.store.allPokemon = data;
                    } else {
                        this.store.allPokemon = data.filter(pokemon => pokemon.type.includes(this.store.typeSelected));
                    }
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
    <AppFilter></AppFilter>
    <AppMain></AppMain>
</template>

<style></style>
