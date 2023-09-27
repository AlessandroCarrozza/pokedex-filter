<script>
import { store } from "../store";
export default {
    name: 'AppContacts',
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="contacts">
        <h1>contatti</h1>
    </div>
</template>

<style scoped lang="scss">
.contacts {
    padding-top: 100px;
}
</style>