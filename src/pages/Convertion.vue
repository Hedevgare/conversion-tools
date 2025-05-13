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
    }
}
</script>

<template>
    <section class="body">
        <h1 class="title margin-bottom-50">{{ this.$props.name }} Converter</h1>
        <conversion-block :startFrom="this.$props.startFromUnit" :startTo="this.$props.startToUnit" :units="this.$props.units" :shouldRound="this.$props.shouldRound" />
    </section>
</template>