<script>
import ConversionBlock from '../components/ConversionBlock.vue';
export default {
    components: {
        'conversion-block': ConversionBlock
    },
    data() {
        const units = [
            { unit: 'Celsius', symbol: 'ºC' },
            { unit: 'Fahrenheit', symbol: 'ºF' },
            { unit: 'Kelvin', symbol: 'K' },
            { unit: 'Rankine', symbol: 'ºR' }
        ];
        return {
            units: units,
            startFromUnit: units[0],
            startToUnit: units[1]
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