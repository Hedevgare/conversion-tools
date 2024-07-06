<script>
import ConversionBlock from '../components/ConversionBlock.vue';
export default {
	components: {
		'conversion-block': ConversionBlock
	},
	data() {
		const units = [
			{ unit: 'Binary', symbol: '0b' },
			{ unit: 'Octal', symbol: '0o' },
			{ unit: 'Decimal', symbol: '0d' },
			{ unit: 'Hexadecimal', symbol: '0x' }
		];
		return {
			units: units,
			startFromUnit: units[0],
			startToUnit: units[2]
		}
	}
}
</script>

<template>
	<section class="body">
		<h1 class="title">Number Converter</h1>
		<conversion-block :startFrom="startFromUnit" :startTo="startToUnit" :units="units" />
	</section>
</template>
