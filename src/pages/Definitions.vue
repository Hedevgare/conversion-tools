<script>
export default {
    data() {
        return {
            precision: localStorage.precision || 10,
            darkmode: localStorage.darkmode === 'true'
        }
    },
    watch: {
        precision(newValue) {
            localStorage.precision = newValue;
        },
        darkmode(newValue) {
            localStorage.darkmode = newValue;

            window.dispatchEvent(new CustomEvent('darkmode-toggle', { detail: newValue }));
        }
    }
}
</script>

<template>
    <h1 :class="{ 'dark-mode-text': darkmode, 'light-mode-text': !darkmode }">Configurations</h1>
    <p class="margin-bottom-50" :class="{ 'dark-mode-text-secondary': darkmode, 'light-mode-text': !darkmode }">Configure your application settings below.</p>
    <div class="flex flex-center margin-10">
        <p class="padding-right-50 text-right" :class="{ 'dark-mode-text-secondary': darkmode, 'light-mode-text': !darkmode }">Precision</p>
        <input class="input-definitions" :class="{ 'dark-mode': darkmode, 'light-mode': !darkmode, 'dark-mode-text-secondary': darkmode, 'light-mode-text': !darkmode }" type="number" v-model="precision" />
    </div>
    <div class="flex flex-center margin-10">
        <p class="padding-right-50 text-right" :class="{ 'dark-mode-text-secondary': darkmode, 'light-mode-text': !darkmode }">Toggle dark mode (WIP)</p>
        <input type="checkbox" v-model="darkmode" />
    </div>
</template>