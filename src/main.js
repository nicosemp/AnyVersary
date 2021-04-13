import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "@/assets/bootstrap_v5.0.0-beta3.min.css";

createApp(App).use(store).use(router).mount("#app");
