<script>
import { store } from "../store";
export default {
    name: 'SingleCard',
    data() {
        return {
            store,
        }
    },
    methods: {
        addZeroNumber(number) {
            let numString = number.toString();
            if (numString.length > 2) {
                return number;
            } else if (numString.length == 2) {
                number = '0' + numString;
                return number;
            } else if (numString.length == 1) {
                number = '00' + numString;
                return number;
            }
        }
    }
}
</script>

<template>
    <div v-for="pokemon in this.store.allPokemon" class="card m-3 d-inline-block  text-center" style="width: 18rem;">
        <div class="card-body">
            <div class="text-secondary fs-5 pb-3">#{{ pokemon.id }}</div>
            <img :src="'../../public/images/' + this.addZeroNumber(pokemon.id) + '.png'" :alt="pokemon.name.english"
                class="w-100">
            <h5 class="card-title pt-2">{{ pokemon.name.english }}
            </h5>
            <div class="types">
                <span v-for="tipo in pokemon.type" class="type d-inline-block mb-3 mx-1 rounded px-2">{{ tipo }}</span>
            </div>
            <a href="#" class="btn btn-primary d-block">Vedi dettagli</a>
        </div>
    </div>
</template>

<style scoped lang="scss">
.type {
    border: 2px solid black;
}
</style>