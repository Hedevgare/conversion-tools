<script>
import ConversionBlock from '../components/ConversionBlock.vue';
export default {
	components: {
		'conversion-block': ConversionBlock
	},
	data() {
		const units = [
			{ unit: 'Meters', symbol: 'm' },
			{ unit: 'Millimeters', symbol: 'mm' },
			{ unit: 'Centimeters', symbol: 'cm' },
			{ unit: 'Kilometers', symbol: 'km' },
			{ unit: 'Feet', symbol: 'ft' },
			{ unit: 'Inches', symbol: 'in' }
		];
		return {
			units: units,
			startFromUnit: units[0],
			startToUnit: units[4]
		}
	}
}
</script>

<template>
	<section class="body">
		<h1 class="title">Length Converter</h1>
		<conversion-block :startFrom="startFromUnit" :startTo="startToUnit" :units="units" :shouldRound="true" />
	</section>
</template>
