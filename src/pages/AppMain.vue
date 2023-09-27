<script>
import { store } from "../store";
import AppFilter from "../components/AppFilter.vue";
import AppList from "../components/AppList.vue";
export default {
    name: 'AppMain',
    components: {
        AppFilter,
        AppList,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <AppFilter></AppFilter>
    <AppList></AppList>
</template>

<style scoped lang="scss"></style>