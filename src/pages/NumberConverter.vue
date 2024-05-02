<script>
import ConversionBlock from '../components/ConversionBlock.vue';
export default {
	components: {
		'conversion-block': ConversionBlock
	},
	data() {
		return {
			units: ['Binary', 'Octal', 'Decimal', 'Hexadecimal'],
			startFromUnit: 'Binary',
			startToUnit: 'Decimal'
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
