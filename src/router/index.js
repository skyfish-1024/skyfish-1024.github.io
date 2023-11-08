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
		{
			path: '/home',
			name: 'home',
			component: () => import('../views/Home.vue'),
		},
		{
			path: '/blog',
			name: 'blog',
			component: () => import('../views/BlogView.vue'),
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('../views/AboutView.vue'),
		},
		{
			path: '/cssStyle',
			name: 'cssStyle',
			component: () => import('../views/CssStyle.vue'),
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
		{
			path: '/:pathMatch(.*)',
			redirect: '/home',
		},
	],
});

export default router;
