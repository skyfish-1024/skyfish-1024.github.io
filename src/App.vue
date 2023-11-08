<script setup>
import Nav from './components/Nav.vue';
</script>

<template>
	<div class="navBox">
		<Nav></Nav>
	</div>
	<div class="routerBox">
		<div class="router">
			<router-view />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.navBox {
	max-width: 80rem;
	width: 100%;
	margin: 0 auto;
	top: 0;
}

.routerBox {
	height: calc(100vh - 2.5rem);
	overflow: auto;
	margin: 0 auto;
	padding: 0 5px;
	width: 80rem;
	background-color: rgba(255, 255, 255, 0.2);
	border-radius: 10px;

	&::-webkit-scrollbar {
		background-color: #c5aea6;
		// display: none;
		height: 0;
		width: 5px;
		border-radius: 5px;
	}
	.router {
		font-size: 1rem;
		margin: 0 auto;
		width: 80rem;
	}
}
</style>
