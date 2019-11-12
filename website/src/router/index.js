import Vue from 'vue';
import VueRouter from 'vue-router';
import LandingPage from '../containers/landing/Page.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'landing.page',
		component: LandingPage
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
