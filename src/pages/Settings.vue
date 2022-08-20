<script lang="tsx">
import { mapGetters } from "vuex";
import { defineComponent } from "vue";
import { isLetter } from "../utils";
import CityList from "../components/CityList.vue";
import draggable from "vuedraggable";

export default defineComponent({
	computed: mapGetters(["getRecentCities"]),
	name: "settings",
	data() {
		return {
			inputValue: "",
			drag: false,
		};
	},
	methods: {
		dispatchCity(city) {
			if (city.length !== 0) {
				this.$store.dispatch("fetchWeather", city);
				this.$store.commit('updateDefaultCity', city)
				this.inputValue = "";
				this.$router.push("/");
			}
		},
		clickButton() {
			(this.$refs["submitButton"] as any).click();
		},
		isLetter,
	},
	components: {
		CityList,
		draggable,
	},
});
</script>

<template>
	<div class="widget">
		<header class="widget_header">
			<h3>Settings</h3>
			<RouterLink to="/">
				<svg
					class="svg-icon"
					width="20px"
					height="30px"
					viewBox="0 0 1024 1024"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z"
					/>
				</svg>
			</RouterLink>
		</header>
	</div>

	<div class="widget_cities">
		<draggable
			group="cities"
			:list="getRecentCities"
			item-key="id"
			:animation="200"
			forceFallback="false"
			handle=".widget_city-drag"
		>
			<template #item="{ element }">
				<cityList :dispatchCity="dispatchCity" :city="element" />
			</template>
		</draggable>
	</div>

	<form class="widget_submit">
		<label for="input">
			<strong>Insert City: </strong>
		</label>
		<input
			id="input"
			type="text"
			@keydown="isLetter($event)"
			v-model="inputValue"
		/>
		<img @click="clickButton()" src="../assets/enter.svg" />
		<button
			ref="submitButton"
			type="submit"
			@click.prevent="dispatchCity(inputValue)"
		>
			Select City
		</button>
	</form>
</template>

<style>
.widget_cities {
	width: 300px;
	margin: auto;
}
.widget_submit {
	display: flex;
	justify-content: center;
}
input {
	margin: 0 15px;
}

.hidden-ghost {
	opacity: 1;
}

.widget_submit button {
	display: none;
	pointer-events: none;
}
</style>
