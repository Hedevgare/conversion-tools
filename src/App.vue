<script>
export default {
    data() {
        return {
            appVersion: 'v0.8.0',
            isMenuOpen: false,
            darkmode: localStorage.darkmode === 'true'
        }
    },
    mounted() {
        window.addEventListener('darkmode-toggle', (event) => {
            this.darkmode = event.detail;
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
    <div class="header" :class="{ 'dark-mode': darkmode, 'light-mode': !darkmode }">
        <div class="header-icons">
            <div class="hamburger-button" :class="{ 'open': isMenuOpen }" @click="toggleMenu">
                <div class="bar-1" :class="{ 'dark-mode-menu': darkmode, 'light-mode-menu': !darkmode }"></div>
                <div class="bar-2" :class="{ 'dark-mode-menu': darkmode, 'light-mode-menu': !darkmode }"></div>
                <div class="bar-3" :class="{ 'dark-mode-menu': darkmode, 'light-mode-menu': !darkmode }"></div>
            </div>
            <!-- <div class="header-title">
                <p>Conversion Tools</p>
            </div> -->
            <div class="definitions-button" @click="openDefinitions">
                <font-awesome-icon :icon="['fa', 'cog']" />
            </div>
        </div>
        <hr :class="{ 'dark-mode': darkmode, 'light-mode': !darkmode }" />
    </div>
    <section class="menu" :class="{ 'open': isMenuOpen, 'dark-mode': darkmode, 'light-mode': !darkmode }">
        <div class="menu-container">
            <div class="menu-item">
                <RouterLink class="header-link" :class="{ 'dark-mode-text': darkmode, 'light-mode-text': !darkmode }" to="/" @click="toggleMenu">
                    <font-awesome-icon :icon="['fa', 'hashtag']" />
                    Numbers
                </RouterLink>
            </div>
            <div class="menu-item">
                <RouterLink class="header-link" :class="{ 'dark-mode-text': darkmode, 'light-mode-text': !darkmode }" to="/length" @click="toggleMenu">
                    <font-awesome-icon :icon="['fa', 'ruler']" />
                    Lengths
                </RouterLink>
            </div>
            <div class="menu-item">
                <RouterLink class="header-link" :class="{ 'dark-mode-text': darkmode, 'light-mode-text': !darkmode }" to="/temperature" @click="toggleMenu">
                    <font-awesome-icon :icon="['fa', 'temperature-half']" />
                    Temperatures
                </RouterLink>
            </div>
            <div class="menu-item">
                <RouterLink class="header-link" :class="{ 'dark-mode-text': darkmode, 'light-mode-text': !darkmode }" to="/volume" @click="toggleMenu">
                    <font-awesome-icon :icon="['fa', 'flask']" />
                    Volumes
                </RouterLink>
            </div>
            <div class="menu-item">
                <RouterLink class="header-link" :class="{ 'dark-mode-text': darkmode, 'light-mode-text': !darkmode }" to="/weight" @click="toggleMenu">
                    <font-awesome-icon :icon="['fa', 'weight-hanging']" />
                    Weights
                </RouterLink>
            </div>
            <div class="menu-item">
                <RouterLink class="header-link" :class="{ 'dark-mode-text': darkmode, 'light-mode-text': !darkmode }" to="/time" @click="toggleMenu">
                    <font-awesome-icon :icon="['fa', 'hourglass']" />
                    Times
                </RouterLink>
            </div>
            <div class="menu-item">
                <RouterLink class="header-link" :class="{ 'dark-mode-text': darkmode, 'light-mode-text': !darkmode }" to="/area" @click="toggleMenu">
                    <font-awesome-icon :icon="['fa', 'arrows-left-right-to-line']" />
                    Areas
                </RouterLink>
            </div>
            <div class="menu-item">
                <RouterLink class="header-link" :class="{ 'dark-mode-text': darkmode, 'light-mode-text': !darkmode }" to="/velocity" @click="toggleMenu">
                    <font-awesome-icon :icon="['fa', 'tachometer-alt']" />
                    Velocities
                </RouterLink>
            </div>
        </div>
    </section>
    <section class="body" :class="{ 'open': isMenuOpen, 'dark-mode': darkmode, 'light-mode': !darkmode }">
        <RouterView />
    </section>
    <div class="footer" :class="{ 'dark-mode': darkmode, 'light-mode': !darkmode, 'dark-mode-text': darkmode, 'light-mode-text': !darkmode }">
        <p>
            <a :class="{ 'dark-mode-text': darkmode, 'light-mode-text': !darkmode }" href="https://hedegaremoreira.com" target="_blank">Hedegare</a> {{ footer }} - 
            <a :class="{ 'dark-mode-text': darkmode, 'light-mode-text': !darkmode }" href="https://coff.ee/hedegare" target="_blank" rel="noopener" title="Buy me a coffee">
                <font-awesome-icon :icon="['fa', 'coffee']" />
                <span class="footer-tipjar-text">Buy me a coffee</span>
            </a>
        </p>
    </div>
</template>