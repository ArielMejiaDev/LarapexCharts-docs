<script setup>
import VueApexCharts from 'vue3-apexcharts';

const chart = {
    type: "line",
    options: {"chart":{"height":500,"toolbar":{"show":false},"zoom":{"enabled":true}, "fontFamily": "monospace", "foreColor":"#ff6384"},"plotOptions":{"bar":{"horizontal":false}},"colors":["#ffc63b","#ff6384"],"dataLabels":{"enabled":false},"title":{"text":"Sales during 2021."},"subtitle":{"text":"Physical sales vs Digital sales.","align":"left"},"xaxis":{"categories":["January","February","March","April","May","June"],"convertedCatToNumeric":true},"grid":{"show":false},"markers":{"show":false}},
    series: [{"name":"Published posts","data":[4,9,5,2,1,8]},{"name":"Unpublished posts","data":[7,2,7,2,5,4]}]
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