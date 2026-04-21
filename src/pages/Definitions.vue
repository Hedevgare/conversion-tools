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
    <h1>Configurations</h1>
    <div class="flex flex-center margin-10">
        <p class="flex-1 padding-right-15">Precision</p>
        <input class="input-definitions" type="number" v-model="precision" />
    </div>
    <div class="flex flex-center margin-10">
        <p class="flex-1 padding-right-15">Toggle dark mode (WIP)</p>
        <input type="checkbox" />
    </div>
</template>