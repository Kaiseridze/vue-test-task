module.exports = {
	publicPath:
		process.env.NODE_ENV === "production" ? "/НАЗВАНИЕ_ПРОЕКТА/" : "/",
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "@/assets/styles.scss";`,
			},
		},
	},
};
