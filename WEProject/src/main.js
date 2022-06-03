import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueScrollFixedNavbar from "vue-scroll-fixed-navbar";
import "./../node_modules/Bulma/CSS/bulma.css";
import "./validators"

/*
const app = createApp(App);

app.use(router);

app.mount("#app");
*/

createApp(App)
    .use(router)
    .use(VueScrollFixedNavbar)
    .mount("#app");

    