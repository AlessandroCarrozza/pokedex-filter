<script>
import { store } from "../store";
import { generateAllPokemon } from "../main";
export default {
    name: 'AppFilter',
    data() {
        return {
            store,
        }
    },
    methods: {
        generateAllTypes() {
            fetch('../../public/pokemon-json/types.json') // il file.json, per far funzionare la fetch, deve assolutamente stare nella cartella public
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    this.store.allTypes = data;
                    console.log(this.store.allTypes);
                })
                .catch(err => { });
        },
        generateAllPokemon() {
            generateAllPokemon(this.store);
        }
    },
    created() {
        this.generateAllTypes();
    }
}
</script>

<template>
    <div class="filter-container text-center">
        <div class="search-container d-inline-block">
            <i class="fa fa-search px-3"></i>
            <input v-model="this.store.searchPokemon" type="text" class="search-bar" placeholder="Cerca per nome..."
                @keyup="this.generateAllPokemon()">
        </div>

        <div class="filter-type d-inline-block px-5">
            <div class="py-1">Cerca per tipo</div>
            <select v-model="this.store.typeSelected" class="form-select form-select-lg mb-3 fs-6 text-center"
                aria-label=".form-select-lg example" name="filter" id="filter" @change="this.generateAllPokemon()">
                <option value="all">All</option>
                <option v-for="tipo in this.store.allTypes" :value="tipo.english">{{ tipo.english }}</option>
            </select>
        </div>
    </div>
</template>

<style scoped lang="scss">
.filter-container {
    padding-top: 100px;

    .search-container {
        border: 1px solid lightgrey;
        border-radius: 7px;

        .search-bar {
            border-radius: 7px;
            width: 350px;
            height: 50px;
            border: none;
            outline: none;
            font-size: 1.2rem;
        }
    }

    .filter-type {
        select {
            outline: none;

            &:focus {
                border: 1px solid lightgrey;
                box-shadow: none;
            }
        }

        option {
            text-align: left;
        }
    }
}
</style>