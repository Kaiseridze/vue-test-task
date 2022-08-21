module.exports = {
	publicPath: "/vue-test-task/",
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "@/assets/styles.scss";`,
			},
		},
	},
};
