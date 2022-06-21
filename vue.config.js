const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: ["vuetify"],
    devServer: {
        host: 'localhost'
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/apps/dashboard-iso/' : '/',
    pwa: {
		workboxOptions: {
			skipWaiting: true
		}
	}
});
