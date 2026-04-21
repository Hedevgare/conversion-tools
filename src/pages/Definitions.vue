<script>
export default {
    data() {
        return {
            precision: localStorage.precision || 10,
        }
    },
    watch: {
        precision(newValue) {
            localStorage.precision = newValue;
        }
    }
}
</script>

<template>
    <h1 class="title">Configurations</h1>
    <p class="margin-bottom-50">Configure your application settings below.</p>
    <div class="flex flex-center margin-10">
        <p class="flex-1 padding-right-50 text-right">Precision</p>
        <input class="input-definitions" type="number" v-model="precision" />
    </div>
    <div class="flex flex-center margin-10">
        <p class="flex-1 padding-right-50 text-right">Toggle dark mode (WIP)</p>
        <input type="checkbox" />
    </div>
</template>