import { createApp } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";
import App from "./App.vue";

import "./styles/main.css";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHashtag, faRuler, faTemperatureHalf, faFlask, faF } from '@fortawesome/free-solid-svg-icons';

import LengthConverter from "./pages/LengthConverter.vue";
import NumberConverter from "./pages/NumberConverter.vue";
import TemperatureConverter from "./pages/TemperatureConverter.vue";
import VolumeConverter from "./pages/VolumeConverter.vue";

const routes = [
    { path: '/', component: NumberConverter },
    { path: '/length', component: LengthConverter },
    { path: '/temperature', component: TemperatureConverter },
    { path: '/volume', component: VolumeConverter }
];

const router = createRouter({
    linkActiveClass: "underline-text",
    history: createMemoryHistory(),
    routes
});

library.add(faHashtag, faRuler, faTemperatureHalf, faFlask);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount("#app");
