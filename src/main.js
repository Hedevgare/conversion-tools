import { createApp } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";
import App from "./App.vue";

import "./styles/main.css";

import LengthConverter from "./pages/LengthConverter.vue";
import NumberConverter from "./pages/NumberConverter.vue";
import TemperatureConverter from "./pages/TemperatureConverter.vue";
import CurrencyConverter from "./pages/CurrencyConverter.vue";

const routes = [
    { path: '/', component: NumberConverter },
    { path: '/length', component: LengthConverter },
    { path: '/temperature', component: TemperatureConverter },
    { path: '/currency', component: CurrencyConverter }
];

const router = createRouter({
    linkActiveClass: "underline-text",
    history: createMemoryHistory(),
    routes
});

createApp(App).use(router).mount("#app");
