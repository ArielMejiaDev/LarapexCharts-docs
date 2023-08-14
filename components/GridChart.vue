<script setup>
import VueApexCharts from 'vue3-apexcharts';

const props = defineProps({
    gridColor: String,
});

const chart = {
    type: "area",
    series: [{"name":"Physical sales","data":[40,93,35,42,18,82]},{"name":"Digital sales","data":[70,29,77,28,55,45]}],
    options: {"chart":{"height":500,"toolbar":{"show":false},"zoom":{"enabled":true}},"plotOptions":{"bar":{"horizontal":false}},"colors":["#008FFB","#00E396","#feb019","#ff455f","#775dd0","#80effe","#0077B5","#ff6384","#c9cbcf","#0057ff","00a9f4","#2ccdc9","#5e72e4"],"dataLabels":{"enabled":false},"title":{"text":"Sales during 2021."},"subtitle":{"text":"Physical sales vs Digital sales.","align":"left"},"xaxis":{"categories":["January","February","March","April","May","June"],"convertedCatToNumeric":true},"grid":{"row":{"colors":[props.gridColor ?? "#e5e7eb","transparent"],"opacity":0.1}},"markers":{"show":false}},
}
</script>

<template>
  <ClientOnly>
    <div class="chart-container">
      <div class="chart-card">
        <VueApexCharts :width="chart.options.chart.width" :type="chart.type" :options="chart.options" :series="chart.series"></VueApexCharts>
      </div>
    </div>
  </ClientOnly>
</template>