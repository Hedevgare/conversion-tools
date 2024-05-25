<script>
import ConversionBlock from '../components/ConversionBlock.vue';
export default {
    components: {
        'conversion-block': ConversionBlock
    },
    data() {
        return {
            units: ['Euro', 'Dollar'],
            startFromUnit: 'Euro',
            startToUnit: 'Dollar'
        }
    }
}
</script>

<template>
    <section class="body">
        <h1 class="title">Currency Converter</h1>
        <conversion-block :startFrom="startFromUnit" :startTo="startToUnit" :units="units" :shoulldRound="true" />
    </section>
</template>