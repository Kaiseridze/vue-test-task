import { createStore, Store } from "vuex";

import type { Root } from "../models";
import fetchWeather from "./modules/fetchWeather";

declare module "@vue/runtime-core" {
	interface ComponentCustomProperties {
		$store: Store<Root>;
	}
}

export const store = createStore<Root>({
	modules: { fetchWeather },
});