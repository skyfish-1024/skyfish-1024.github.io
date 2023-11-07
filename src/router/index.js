import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		// {
		// 	path: '/canvas',
		// 	name: 'canvas',
		// 	component: () => import('@/views/Canvas.vue'),
		// },
		// {
		// 	path: '/css',
		// 	name: 'css',
		// 	children: [
		// 		{
		// 			path: 'flex',
		// 			component: () => import('@/views/css/FlexBox.vue'),
		// 		},
		// 	],
		// },
		// {
		// 	path: '/:pathMatch(.*)',
		// 	redirect: '/home',
		// },
	],
});

export default router;
