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
        <h1 class="text-center pt-5">My Github = <a href="https://github.com/alessandrocarrozza">click here</a></h1>
        <h1 class="text-center">My Linkedin = <a href="https://www.linkedin.com/in/alessandro-carrozza-2159bb27a/">click
                here</a></h1>
    </div>
</template>

<style scoped lang="scss">
.contacts {
    padding-top: 100px;
}
</style>