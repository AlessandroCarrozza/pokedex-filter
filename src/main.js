import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa il file CSS di Bootstrap
import { router } from "./router.js";

createApp(App).use(router).mount('#app')


// funzione per generare i pokemon, scritta qui per evitare la duplicazione in App.vue e AppFilter.vue
export function generateAllPokemon(store) {
    return fetch('../public/pokemon-json/pokedex.json')
        .then((response) => response.json())
        .then((data) => {
            if (store.typeSelected == 'all') {
                store.allPokemon = data;
            } else {
                store.allPokemon = data.filter((pokemon) =>
                    pokemon.type.includes(store.typeSelected)
                );
            }

            store.allPokemon = store.allPokemon.filter((pokemon) =>
                pokemon.name.english.toUpperCase().startsWith(store.searchPokemon.toUpperCase())
            );
        })
        .catch((err) => { });
}