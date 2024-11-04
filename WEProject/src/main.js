import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueScrollFixedNavbar from "vue-scroll-fixed-navbar";
import "./../node_modules/Bulma/CSS/bulma.css";
import './axios'

// setup fake backend
import { configureFakeBackend } from './_helpers/fake-backend.js';
configureFakeBackend();

/*
const app = createApp(App);

app.use(router);

app.mount("#app");
*/

createApp(App)
    .use(router)
    .use(VueScrollFixedNavbar)
    .mount("#app");

    