import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueScrollFixedNavbar from "vue-scroll-fixed-navbar";

/*
const app = createApp(App);

app.use(router);

app.mount("#app");
*/

createApp(App)
    .use(router)
    .use(VueScrollFixedNavbar)
    .mount("#app");