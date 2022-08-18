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
		<img src="https://img.icons8.com/ios/20/000000/menu-rounded.png" />
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
	justify-content: space-evenly;
	align-items: center;

	background-color: rgb(206, 206, 206);
	margin-bottom: 10px;
}

.widget_city h3,
img {
	cursor: pointer;
}
</style>
