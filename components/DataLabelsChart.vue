<script setup>
import VueApexCharts from 'vue3-apexcharts';

const chart = {
    type: "area",
    options: {"chart":{"height":500,"toolbar":{"show":false},"zoom":{"enabled":true}},"plotOptions":{"bar":{"horizontal":false}},"colors":["#FFC107","#303F9F"],"dataLabels":{"enabled":true},"title":{"text":"Sales during 2021."},"subtitle":{"text":"Physical sales vs Digital sales.","align":"left"},"xaxis":{"categories":["January","February","March","April","May","June"],"convertedCatToNumeric":true},"grid":{"row":{"colors":["#3F51B5","transparent"],"opacity":0.1}},"markers":{"size":7,"colors":["#FF5722","#E040FB"],"strokeColors":"#fff","strokeWidth":3.5,"hover":{"size":10}}},
    series: [{"name":"Physical sales","data":[40,93,35,42,18,82]},{"name":"Digital sales","data":[70,29,77,28,55,45]}]
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