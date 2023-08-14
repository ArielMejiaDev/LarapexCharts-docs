<script setup>
import VueApexCharts from 'vue3-apexcharts';

const chart = {
    type: "bar",
    series: [{"name":"San Francisco","data":[6,9,3,4,10,8]},{"name":"Boston","data":[7,3,8,2,6,4]}],
    options: {"chart":{"height":500,"toolbar":{"show":false},"zoom":{"enabled":true}},"plotOptions":{"bar":{"horizontal":true}},"colors":["#FFC107","#D32F2F"],"dataLabels":{"enabled":false},"title":{"text":"Los Angeles vs Miami."},"subtitle":{"text":"Wins during season 2021.","align":"left"},"xaxis":{"categories":["January","February","March","April","May","June"],"convertedCatToNumeric":false},"grid":{"show":false},"markers":{"show":false}}
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