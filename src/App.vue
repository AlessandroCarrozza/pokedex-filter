<script>
import AppHeader from "./components/AppHeader.vue";
import AppFilter from "./components/AppFilter.vue";
import AppList from "./components/AppList.vue";
import { store } from "./store";

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

                    this.store.allPokemon = this.store.allPokemon.filter(pokemon => pokemon.name.english.toUpperCase().startsWith(this.store.searchPokemon.toUpperCase()));
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
    <router-view></router-view>
</template>

<style></style>
