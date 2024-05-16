<script>
import ConversionBlock from '../components/ConversionBlock.vue';
export default {
	components: {
		'conversion-block': ConversionBlock
	},
	data() {
		return {
			units: ['Meters', 'Millimeters', 'Centimeters', 'Kilometers', 'Feet', 'Inches'],
			startFromUnit: 'Meters',
			startToUnit: 'Feet'
		}
	}
}
</script>

<template>
	<section class="body">
		<h1 class="title">Length Converter</h1>
		<conversion-block :startFrom="startFromUnit" :startTo="startToUnit" :units="units" />
	</section>
</template>
