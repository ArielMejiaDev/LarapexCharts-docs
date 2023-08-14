<script setup>
import AreaChart from './components/AreaChart.vue';

const chartSeries = [{name:"Active Users",data:[10, 30, 25]},{name:"Inactive Users",data:[5, 15, 35]}];
</script>

# Build Charts With Vue

You can use InertiaJS to hydrate Vue components with data directly from a controller.

## Install ApexCharts

```bash
npm install --save apexcharts
```

## Install Vue 3 Adapter

::: code-group

```bash [Vue 3 Adapter]
npm install --save vue3-apexcharts
```

```bash [Vue 2 Adapter]
npm install --save vue-apexcharts
```

:::

## Add VueApexCharts to the app

Add the component in `resources/js/app.js` file:

::: code-group

```js [Laravel + Breeze or Jetstream]
import VueApexCharts from "vue3-apexcharts";

createInertiaApp({
    resolve: (name) => require(`./Pages/${name}`),
    setup({ el, app, props, plugin }) {
        createApp({ render: () => h(app, props) })
            .mixin({ methods: { route } })
            .use(plugin)
            .use(VueApexCharts)
            .mount(el);
    },
});
```

```js [Vainilla Laravel with Vue 3]
import VueApexCharts from "vue3-apexcharts";

createApp({...}).use(VueApexCharts)
```

```js [Vainilla Laravel with Vue 2]
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)
```

:::

## Create a chart with CLI using Vue Flag

Execute this command.

```bash
php artisan make:chart MonthlyUsersChart --vue
```

It would generate a chart class in `app/charts/MonthlyUsersChart.php`.

```php
return $this->chart->areaChart()
    ->setTitle('Monthly Users')
    ->addArea('Active users', [10, 30, 25])
    ->addArea('Inactive users', [5, 15, 35])
    ->setColors(['#ffc63b', '#ff6384'])
    ->toVue();
```

## Hydrate Vue Component

On any controller.

```php
public function index(MonthlyUsersChart $chart)
{
    return Inertia::render('Users/Index', ['chart' => $chart->build()]);
}
```

## Render the chart

Create a Vue component like this `resources/js/Pages/Users/Index.vue` and add this content using preferred syntax.

::: code-group

```js [Vue Composition API]
<script setup>
    const props = defineProps({ chart: Object })
</script>

<template>
    <div>
        <apexchart 
            :width="props.chart.width" 
            :height="props.chart.height" 
            :type="props.chart.type" 
            :options=props."chart.options" 
            :series="props.chart.series">
        </apexchart>
    </div>
</template>
```

```js [Vue Options API]
<template>
    <div>
        <apexchart 
            :width="chart.width" 
            :height="chart.height" 
            :type="chart.type" 
            :options="chart.options" 
            :series="chart.series">
        </apexchart>
    </div>
</template>

<script>
    export default {
        props: {
            chart: Object
        }
    }
</script>
```

:::

## Output

<AreaChart :series="chartSeries" :colors="['#ffc63b', '#ff6384']" />
