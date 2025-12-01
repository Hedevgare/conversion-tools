<script>
export default {
    data() {
        return {
            appVersion: 'v0.7.3',
            isMenuOpen: false,
        }
    },
    computed: {
        footer() {
            return `${new Date().getFullYear()} - ${this.appVersion}${import.meta.env.PROD ? '' : '(DEVELOPMENT)'}`
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        }
    }
}
</script>

<template>
    <div class="header">
        <div class="hamburger-button" :class="{ 'open': isMenuOpen }" @click="toggleMenu">
            <div class="bar-1"></div>
            <div class="bar-2"></div>
            <div class="bar-3"></div>
        </div>
        <hr />
    </div>
    <section class="menu" :class="{ 'open': isMenuOpen }">
        <div class="menu-container">
            <div class="menu-item">
                <RouterLink class="header-link" to="/" @click="toggleMenu">
                    <font-awesome-icon :icon="['fa', 'hashtag']" />
                    Numbers
                </RouterLink>
            </div>
            <div class="menu-item">
                <RouterLink class="header-link" to="/length" @click="toggleMenu">
                    <font-awesome-icon :icon="['fa', 'ruler']" />
                    Lengths
                </RouterLink>
            </div>
            <div class="menu-item">
                <RouterLink class="header-link" to="/temperature" @click="toggleMenu">
                    <font-awesome-icon :icon="['fa', 'temperature-half']" />
                    Temperatures
                </RouterLink>
            </div>
            <div class="menu-item">
                <RouterLink class="header-link" to="/volume" @click="toggleMenu">
                    <font-awesome-icon :icon="['fa', 'flask']" />
                    Volumes
                </RouterLink>
            </div>
            <div class="menu-item">
                <RouterLink class="header-link" to="/weight" @click="toggleMenu">
                    <font-awesome-icon :icon="['fa', 'weight-hanging']" />
                    Weights
                </RouterLink>
            </div>
            <div class="menu-item">
                <RouterLink class="header-link" to="/time" @click="toggleMenu">
                    <font-awesome-icon :icon="['fa', 'hourglass']" />
                    Times
                </RouterLink>
            </div>
            <div class="menu-item">
                <RouterLink class="header-link" to="/area" @click="toggleMenu">
                    <font-awesome-icon :icon="['fa', 'arrows-left-right-to-line']" />
                    Areas
                </RouterLink>
            </div>
            <div class="menu-item">
                <RouterLink class="header-link" to="/velocity" @click="toggleMenu">
                    <font-awesome-icon :icon="['fa', 'tachometer-alt']" />
                    Velocities
                </RouterLink>
            </div>
        </div>
    </section>
    <section class="body" :class="{ 'open': isMenuOpen }">
        <RouterView />
    </section>
    <div class="footer">
        <p>
            <a href="https://hedegaremoreira.com" target="_blank">Hedegare</a> {{ footer }} - 
            <a href="https://coff.ee/hedegare" target="_blank" rel="noopener" title="Buy me a coffee">
                <font-awesome-icon :icon="['fa', 'coffee']" />
                <span class="footer-tipjar-text">Buy me a coffee</span>
            </a>
        </p>
    </div>
</template>