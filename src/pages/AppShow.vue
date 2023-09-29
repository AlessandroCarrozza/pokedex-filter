<script>
import { store } from "../store";
export default {
    name: 'AppShow',
    data() {
        return {
            store,
            singlePokemon: [],
            numPhoto: '',
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
    },
    created() {
        let idPokemon = this.$route.params.id;
        fetch('../../public/pokemon-json/pokedex.json')
            .then(response => {
                // Verifica se la richiesta ha avuto successo (status 200 OK)
                if (!response.ok) {
                    throw new Error('Errore nella richiesta');
                }

                // Parsa il file JSON dalla risposta
                return response.json();
            })
            .then(data => {
                // Puoi accedere ai dati JSON qui
                this.singlePokemon = data.filter(pokemon => pokemon.id === Number(idPokemon));
                this.numPhoto = this.addZeroNumber(Number(idPokemon));
                console.log(this.singlePokemon);
                console.log(this.numPhoto);
            })
            .catch(error => {
                console.error('Si è verificato un errore:', error);
            });
    }
}
</script>

<template>
    <h1 class="pt-5">{{ this.singlePokemon[0].name.english }}</h1>
    <img :src="`../../public/images/${this.numPhoto}.png`" alt="">
</template>

<style scoped lang="scss">
h1 {
    font-size: 10rem;
}
</style>