import {  RouteRecordRaw } from 'vue-router';
import Home from '../pages/Home.vue';
import Page2 from '../pages/Page2.vue';


export const HomeRoute: RouteRecordRaw = {
	path: '/',
	component: Home,
	alias: '/home'
}

export const Page2Route: RouteRecordRaw = {
	path: '/page-2',
	component: Page2,
}

const routes: RouteRecordRaw[] = [
	HomeRoute,
	Page2Route
]

export default routes;