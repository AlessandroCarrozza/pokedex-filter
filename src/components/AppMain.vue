<script>
import { store } from "../store";
export default {
    name: 'AppMain',
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div v-for="pokemon in this.store.allPokemon" class="card m-2 d-inline-block" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{ pokemon.name.english }}</h5>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>

<style scoped></style>