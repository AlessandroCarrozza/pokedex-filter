import { createRouter, createWebHistory } from "vue-router";
import AppMain from "./pages/AppMain.vue";
import AppContacts from "./pages/AppContacts.vue";
import AppShow from "./pages/AppShow.vue";

const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                path: "/",
                name: "home",
                component: AppMain
            },
            {
                path: "/contatti",
                name: "contact",
                component: AppContacts
            },
            {
                path: "/dettagli:id",
                name: "show",
                component: AppShow
            },
        ]
    }
);

export { router };