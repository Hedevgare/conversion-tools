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
		<h1 class="title">Length Converter</h1>
		<convertion-block startFrom="Meters" startTo="Feet" :units="['Meters', 'Feet']" />
	</section>
</template>
