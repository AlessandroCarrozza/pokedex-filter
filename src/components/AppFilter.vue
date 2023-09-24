<script>
import { store } from "../store";
export default {
    name: 'AppFilter',
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="filter-container text-center py-3">
        <div class="search-container d-inline-block">
            <i class="fa fa-search px-3"></i>
            <input type="text" class="search-bar" placeholder="Cerca per nome...">
        </div>

        <div class="filter-type d-inline-block px-5">
            <label for="type" class="d-block py-1">Cerca per tipo</label>
            <select class="form-select form-select-lg mb-3 fs-6 text-center" aria-label=".form-select-lg example">
                <option value="1">All</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
    </div>
</template>

<style scoped lang="scss">
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
    label {
        font-size: 1.1rem;
    }

    option {
        text-align: left;
    }
}
</style>