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
    <h1 class="title">Configurations</h1>
    <p class="margin-bottom-50">Configure your application settings below.</p>
    <div class="flex flex-center margin-10">
        <p class="padding-right-50">Precision</p>
        <input class="input-definitions" type="number" v-model="precision" />
    </div>
    <div class="flex flex-center margin-10">
        <p class="padding-right-50">Toggle dark mode (WIP)</p>
        <input type="checkbox" v-model="darkmode" />
    </div>
</template>