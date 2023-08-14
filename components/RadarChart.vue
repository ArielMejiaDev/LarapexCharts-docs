<script setup>
import VueApexCharts from 'vue3-apexcharts';

const chart = {
    type: "radialBar",
    series: [75, 60],
    options: {"chart":{"height":500,"toolbar":{"show":false},"zoom":{"enabled":true}},"plotOptions":{"bar":{"horizontal":false}},"colors":["#D32F2F","#03A9F4"],"dataLabels":{"enabled":false},"title":{"text":"Passing effectiveness."},"subtitle":{"text":"Barcelona city vs Madrid sports.","align":"left"},"xaxis":{"categories":[],"convertedCatToNumeric":false},"grid":{"show":false},"markers":{"show":false},"labels":["Barcelona city","Madrid sports"]}
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