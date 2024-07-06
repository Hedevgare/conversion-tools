<script>
import ConversionBlock from '../components/ConversionBlock.vue';
export default {
    components: {
        'conversion-block': ConversionBlock
    },
    data() {
        return {
            units: ['Litres', 'Gallons', 'Cups'],
            startFromUnit: 'Litres',
            startToUnit: 'Gallons'
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