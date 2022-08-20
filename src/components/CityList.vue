<script lang="tsx">
import { defineComponent } from "vue";

export default defineComponent({
	props: ["city", "dispatchCity"],
	name: "cityList",
	methods: {
		removeCity(city) {
			this.$store.dispatch(`removeRecentCity`, city);
		},
	},
});
</script>

<template >
	<div class="widget_city">
		<img class='widget_city-drag' src="https://img.icons8.com/ios/20/000000/menu-rounded.png" />
		<h3 @click="dispatchCity(city.name)">{{ city.name }}</h3>
		<img
			@click="removeCity(city)"
			src="https://img.icons8.com/ios-glyphs/20/000000/trash--v1.png"
		/>
	</div>
</template>

<style>
.widget_city {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5px;
	background-color: rgb(222, 222, 222);
	margin-bottom: 10px;
}
.widget_city-drag{
	cursor: grab;
}
.widget_city h3,
img {
	cursor: pointer;
}
</style>
