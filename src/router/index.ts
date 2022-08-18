import { createRouter, createWebHistory } from "vue-router";
import Settings from "../pages/Settings.vue";
import WeatherWidget from "../pages/WeatherWidget.vue";
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: WeatherWidget,
		},
		{
			path: "/settings",
			name: "settings",
			component: Settings,
		},
		{
			path: "/:pathMatch(.*)*",
			name: "notFound",
			redirect: "/",
		},
	],
});
router.replace({ name: "home" });
export default router;
