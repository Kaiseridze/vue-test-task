import axios from "axios";
import { BASE_URL, API_KEY } from "../../api";
import type { Root } from "../../models";

export default {
	state: {
		error: "",
		isLoading: true,
		weather: {},
		recentCities: [] as Root[],
	},
	actions: {
		async fetchGeo({ commit }, { lat, lon }) {
			try {
				commit("updateLoadingStatus", true);
				await axios
					.get(`${BASE_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}`)
					.then(({ data }) => {
						commit("updateWeather", data);
						commit("updateRecentCities", data);
						commit("updateLoadingStatus", false);
						commit("updateWeatherRejected", "");
					});
			} catch (error) {
				commit("updateLoadingStatus", false);
				commit("updateWeatherRejected", error.message);
			}
		},

		async fetchWeather({ commit }, city: string) {
			try {
				commit("updateLoadingStatus", true);
				await axios
					.get(`${BASE_URL}q=${city}&appid=${API_KEY}`)
					.then(({ data }) => {
						commit("updateWeather", data);
						commit("updateRecentCities", data);
						commit("updateLoadingStatus", false);
						commit("updateWeatherRejected", "");
					});
			} catch (error) {
				commit("updateLoadingStatus", false);
				commit("updateWeatherRejected", error.message);
			}
		},

		removeRecentCity({ commit }, city) {
			commit("updateRemoveCity", city);
		},
	},
	mutations: {

		updateWeather(state, city: string) {
			state.weather = city;
		},
		updateWeatherRejected(state, message: string) {
			state.error = message;
		},
		updateLoadingStatus(state, status: boolean) {
			state.isLoading = status;
		},
		updateRecentCities(state, city: Root) {
			const isAddedCity = state.recentCities.some(
				(recentCity: Root) => recentCity.id === city.id,
			);
			if (!isAddedCity) {
				state.recentCities.push(city);
			}
		},
		updateRemoveCity(state, city: Root) {
			state.recentCities = state.recentCities.filter(
				(recentCity) => recentCity.id !== city.id,
			);
		},
	},
	getters: {
		getWeather(state) {
			return state.weather;
		},
		getLoadingStatus(state) {
			return state.isLoading;
		},
		getRecentCities(state) {
			return state.recentCities;
		},
		getError(state) {
			return state.error;
		},
	},
};
