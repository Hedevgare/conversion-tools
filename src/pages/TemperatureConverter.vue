<script>
import ConversionBlock from '../components/ConversionBlock.vue';
export default {
    components: {
        'conversion-block': ConversionBlock
    },
    data() {
        return {
            units: ['Celsius', 'Fahrenheit', 'Kelvin'],
            startFromUnit: 'Celsius',
            startToUnit: 'Fahrenheit'
        }
    }
}
</script>

<template>
    <section class="body">
        <h1 class="title">Temperature Converter</h1>
        <conversion-block :startFrom="startFromUnit" :startTo="startToUnit" :units="units" :shouldRound="true" />
    </section>
</template>