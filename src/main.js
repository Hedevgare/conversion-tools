import { createApp } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";
import App from "./App.vue";

import "./styles/main.css";

import LengthConverter from "./components/LengthConverter.vue";
import NumberConverter from "./components/NumberConverter.vue";

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
