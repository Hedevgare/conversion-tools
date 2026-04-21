<script>
import ConversionBlock from '../components/ConversionBlock.vue';
export default {
    components: {
        'conversion-block': ConversionBlock
    },
    props: {
        name: {
            type: String,
            required: true
        },
        units: {
            type: Array,
            required: true
        },
        startFromUnit: {
            type: Object,
            required: true
        },
        startToUnit: {
            type: Object,
            required: true
        },
        shouldRound: {
            type: Boolean,
            required: false,
        }
    },
    data() {
        return {
            darkmode: localStorage.darkmode === 'true'
        }
    },
    mounted() {
        window.addEventListener('darkmode-toggle', (event) => {
            this.darkmode = event.detail;
        });
    }
}
</script>

<template>
    <h1 :class="{ 'dark-mode-text': darkmode, 'light-mode-text': !darkmode }">{{ this.$props.name }} Converter</h1>
    <conversion-block :startFrom="this.$props.startFromUnit" :startTo="this.$props.startToUnit" :units="this.$props.units" :shouldRound="this.$props.shouldRound" />
</template>