<script>
import ConvertionBlock from '../components/ConvertionBlock.vue';
export default {
	components: {
		'convertion-block': ConvertionBlock
	}
}
</script>

<template>
	<section class="body">
		<h1 class="title">Number Converter</h1>
		<convertion-block startFrom="Binary" startTo="Decimal" :units="['Binary', 'Octal', 'Decimal', 'Hexadecimal']" />
	</section>
</template>
