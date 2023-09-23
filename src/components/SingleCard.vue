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
            <div class="text-secondary fs-6">#{{ pokemon.id }}</div>
            <img :src="'../../public/images/' + this.addZeroNumber(pokemon.id) + '.png'" :alt="pokemon.name.english"
                class="w-100">
            <h5 class="card-title py-2">{{ pokemon.name.english }}
            </h5>
            <a href="#" class="btn btn-primary">Vedi dettagli</a>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>