<template>
	<div class="nav">
		<div class="logo" @click="linkTo('/home')">
			<img src="../assets/logo.png" alt="" />
			SkyFish
		</div>
		<ul class="navList">
			<li v-for="item in navList" :key="item.name" @click="linkTo(item.path)">
				{{ item.name }}
			</li>
		</ul>
	</div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const navList = ref([
	{ name: 'HOME', path: '/home' },
	{ name: 'BLOG', path: '/blog' },
	{ name: 'CSS', path: '/cssStyle' },
	{ name: 'tools', path: '/tools' },
	{ name: 'ABOUT', path: '/about' },
]);
const router = useRouter();
const linkTo = (path) => {
	router.push(path);
};
</script>
<style lang="scss" scoped>
.nav {
	width: 100%;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	height: 2.5rem;
	color: lightblue;
	display: flex;
	justify-content: space-between;
	.logo {
		cursor: pointer;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		img {
			height: 80%;
			aspect-ratio: 1;
		}
	}
	.navList {
		list-style: none;
		display: flex;
		align-items: center;
		li {
			padding: 10px;
			cursor: pointer;
		}
	}
}
</style>
