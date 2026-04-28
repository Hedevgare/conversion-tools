<script>
import routesData from "./helpers/routesData";

export default {
    data() {
        return {
            routesData,
            appVersion: 'v0.9.1',
            isMenuOpen: false,
            darkmode: !localStorage.darkmode ? true : localStorage.darkmode === 'true',
            favoriteUnits: JSON.parse(localStorage.getItem("favoriteUnits") || '[]') // Default to true if not set, otherwise convert string to boolean
        }
    },
    mounted() {
        window.addEventListener('darkmode-toggle', (event) => {
            this.darkmode = event.detail;
        });
        window.addEventListener('favoriteUnits-updated', (event) => {
            this.favoriteUnits = event.detail;
        });
    },
    computed: {
        footer() {
            return `${new Date().getFullYear()} - ${this.appVersion}${import.meta.env.PROD ? '' : '(DEVELOPMENT)'}`
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        openDefinitions() {
            this.$router.push('/definitions');
        }
    }
}
</script>

<template>
    <div class="header" :class="{ 'dark': darkmode }">
        <div class="header-icons">
            <div class="hamburger-button" :class="{ 'open': isMenuOpen }" @click="toggleMenu">
                <div class="bar-1"></div>
                <div class="bar-2"></div>
                <div class="bar-3"></div>
            </div>
            <div class="definitions-button" @click="openDefinitions">
                <font-awesome-icon :icon="['fa', 'cog']" />
            </div>
        </div>
        <hr />
    </div>
    <section class="menu" :class="{ 'open': isMenuOpen, 'dark': darkmode }">
        <div v-if="favoriteUnits.length > 0" class="menu-header">
            <p>Favorite conversions</p>
        </div>
        <div class="menu-container">
            <div class="menu-item" v-for="favoriteUnit in favoriteUnits" :key="favoriteUnit">
                <RouterLink class="header-link" :to="`${routesData[favoriteUnit.toLowerCase()].url}`"
                    @click="toggleMenu">
                    <font-awesome-icon :icon="['fa', routesData[favoriteUnit.toLowerCase()].icon]" />
                    {{ favoriteUnit }}
                </RouterLink>
            </div>
        </div>
        <div class="menu-header">
            <p>All conversions</p>
        </div>
        <div class="menu-container">
            <div class="menu-item" v-for="route in Object.values(routesData)" :key="route.name">
                <RouterLink class="header-link" :to="`${route.url}`" @click="toggleMenu">
                    <font-awesome-icon :icon="['fa', route.icon]" />
                    {{ route.name }}
                </RouterLink>
            </div>
        </div>
    </section>
    <section class="body" :class="{ 'open': isMenuOpen, 'dark': darkmode }">
        <RouterView />
    </section>
    <div class="footer" :class="{ 'dark': darkmode }">
        <p>
            <a href="https://hedegaremoreira.com" target="_blank">Hedegare</a> {{ footer }} -
            <a href="https://coff.ee/hedegare" target="_blank" rel="noopener" title="Buy me a coffee">
                <font-awesome-icon :icon="['fa', 'coffee']" />
                <span class="footer-tipjar-text">Buy me a coffee</span>
            </a>
        </p>
    </div>
</template>