<script lang="tsx">
import { defineComponent } from "vue";

export default defineComponent({
	props: ["text"],
	name: "AccessDenied",
});
</script>

<template>
	<header class="widget_header">
		<h3>{{ text }}</h3>
	</header>
</template>
