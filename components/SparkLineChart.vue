<script setup>
import VueApexCharts from 'vue3-apexcharts';

const chart = {
    type: "line",
    series: [{"name":"Published posts","data":[4,9,5,2,1,8]}],
    options: {"chart":{"height":500,"sparkline":{"enabled":true},},"plotOptions":{"bar":{"horizontal":false}},},
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