<template>
	<div class="cssStyle">
		<StrawberryBear></StrawberryBear>
	</div>
</template>
<script setup>
import { ref, onMounted, nextTick } from 'vue';
import StrawberryBear from '../components/demos/StrawberryBear.vue';

onMounted(() => {
	init();
});
</script>
<style lang="scss"></style>
