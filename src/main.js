import { createApp } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";
import App from "./App.vue";

import "./styles/main.css";

import LengthConverter from "./pages/LengthConverter.vue";
import NumberConverter from "./pages/NumberConverter.vue";

const routes = [
    { path: '/', component: NumberConverter },
    { path: '/length', component: LengthConverter }
];

const router = createRouter({
    linkActiveClass: "underline-text",
    history: createMemoryHistory(),
    routes
});

createApp(App).use(router).mount("#app");
