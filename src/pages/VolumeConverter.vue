<script>
import ConversionBlock from '../components/ConversionBlock.vue';
export default {
    components: {
        'conversion-block': ConversionBlock
    },
    data() {
        const units = [
            { unit: 'Litres', symbol: 'L' },
            { unit: 'Gallons', symbol: 'gal' },
            // { unit: 'Cups', symbol: 'cup' }
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
        <h1 class="title">Volume Converter</h1>
        <conversion-block :startFrom="startFromUnit" :startTo="startToUnit" :units="units" :shouldRound="true" />
    </section>
</template>