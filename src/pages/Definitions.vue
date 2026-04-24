<script>
export default {
    data() {
        return {
            precision: localStorage.precision || 3, // Default to 3 precision decimal places if not set
            darkmode: !localStorage.darkmode ? true : localStorage.darkmode === 'true' // Default to true if not set, otherwise convert string to boolean
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
    <div class="configurations-container">
        <div class="configurations-item margin-10">
            <p class="flex-1 text-right">Precision</p>
            <input class="flex-1 input-definitions" type="number" v-model="precision" />
        </div>
        <div class="configurations-item margin-10">
            <p class="flex-1 text-right">Toggle dark mode</p>
            <input class="flex-1" type="checkbox" v-model="darkmode" />
        </div>
    </div>
</template>