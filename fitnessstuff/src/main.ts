import { createPinia } from "pinia";
import { createApp, markRaw } from "vue";

import App from "./App.vue";
import router from "./router";


const app = createApp(App);
app.use(router);

const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});
app.use(pinia);


app.mount("#app");
