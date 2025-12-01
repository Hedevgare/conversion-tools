import { createApp } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";
import App from "./App.vue";

import "./styles/main.css";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHashtag, faRuler, faTemperatureHalf, faFlask, faWeightHanging, faClock, faArrowsLeftRightToLine, faHourglass, faCoffee, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

import Convertion from "./pages/Convertion.vue";

import routesData from "./helpers/routesData";

const routes = [
    { path: '/', component: Convertion, props: { ...routesData.numbers } },
    { path: '/length', component: Convertion, props: { ...routesData.length } },
    { path: '/temperature', component: Convertion, props: { ...routesData.temperature } },
    { path: '/volume', component: Convertion, props: { ...routesData.volume } },
    { path: '/weight', component: Convertion, props: { ...routesData.weight } },
    { path: '/time', component: Convertion, props: { ...routesData.time } },
    { path: '/area', component: Convertion, props: { ...routesData.area } },
    { path: '/velocity', component: Convertion, props: { ...routesData.velocity } }
];

const router = createRouter({
    linkActiveClass: "underline-text",
    history: createMemoryHistory(),
    routes
});

library.add(faHashtag, faRuler, faTemperatureHalf, faFlask, faWeightHanging, faClock, faArrowsLeftRightToLine, faHourglass, faCoffee, faTachometerAlt);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount("#app");
