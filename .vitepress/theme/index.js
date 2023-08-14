// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import "./custom.css";
import VueApexCharts from "vue3-apexcharts";

// export default DefaultTheme;

export default {
    ...DefaultTheme,
        async enhanceApp({ app }) {
            app.use(VueApexCharts)
    }
}