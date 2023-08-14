---
outline: deep
---

<script setup>
import PieChart from './components/PieChart.vue';
import BarChart from './components/BarChart.vue';
import LineChart from './components/LineChart.vue';
import AreaChart from './components/AreaChart.vue';
import DonutChart from './components/DonutChart.vue';
import RadarChart from './components/RadarChart.vue';
import HeatMapChart from './components/HeatMapChart.vue';
import PolarAreaChart from './components/PolarAreaChart.vue';
import RadialBarChart from './components/RadialBarChart.vue';
import HorizontalBarChart from './components/HorizontalBarChart.vue';
</script>

# More Charts

## Generates a chart using artisan command line

```shell
php artisan make:chart MonthlyUsersChart
```

## Pie Chart

```php
return $this->chart->pieChart()
    ->setTitle('Top 3 scorers of the team.')
    ->setSubtitle('Season 2021.')
    ->addData([20, 24, 30])
    ->setLabels(['Player 7', 'Player 10', 'Player 9']);
```

<PieChart />

## Donut Chart

```php
return $this->chart->donutChart()
    ->setTitle('Top 3 scorers of the team.')
    ->setSubtitle('Season 2021.')
    ->addData([20, 24, 30])
    ->setLabels(['Player 7', 'Player 10', 'Player 9']);
```

<DonutChart />

## Radial Bar Chart

```php
return $this->chart->radialChart()
    ->setTitle('Passing effectiveness.')
    ->setSubtitle('Barcelona city vs Madrid sports.')
    ->addData([75, 60])
    ->setLabels(['Barcelona city', 'Madrid sports'])
    ->setColors(['#D32F2F', '#03A9F4']);
```

<RadialBarChart />

## Polar Area Chart

```php
return $this->chart->polarAreaChart()
    ->setTitle('Top 3 scorers of the team.')
    ->setSubtitle('Season 2021.')
    ->addData([20, 24, 30])
    ->setLabels(['Player 7', 'Player 10', 'Player 9']);
```

<PolarAreaChart />

## Line Chart

```php 
return $this->chart->lineChart()
    ->setTitle('Sales during 2021.')
    ->setSubtitle('Physical sales vs Digital sales.')
    ->addData('Physical sales', [40, 93, 35, 42, 18, 82])
    ->addData('Digital sales', [70, 29, 77, 28, 55, 45])
    ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June']);
```

<LineChart />

## Area Chart

```php
return $this->chart->areaChart()
    ->setTitle('Sales during 2021.')
    ->setSubtitle('Physical sales vs Digital sales.')
    ->addData('Physical sales', [40, 93, 35, 42, 18, 82])
    ->addData('Digital sales', [70, 29, 77, 28, 55, 45])
    ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June']);
```

<AreaChart />

## Bar Chart

```php
return $this->chart->barChart()
    ->setTitle('San Francisco vs Boston.')
    ->setSubtitle('Wins during season 2021.')
    ->addData('San Francisco', [6, 9, 3, 4, 10, 8])
    ->addData('Boston', [7, 3, 8, 2, 6, 4])
    ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June']);
```

<BarChart />


## Horizontal Bar Chart

```php
return $this->chart->horizontalBarChart()
    ->setTitle('Los Angeles vs Miami.')
    ->setSubtitle('Wins during season 2021.')
    ->setColors(['#FFC107', '#D32F2F'])
    ->addData('San Francisco', [6, 9, 3, 4, 10, 8])
    ->addData('Boston', [7, 3, 8, 2, 6, 4])
    ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June']);
```

<HorizontalBarChart />

## Heatmap Chart

```php
return $this->chart->heatMapChart()
    ->setTitle('Basic radar chart')
    ->addData('Sales', [80, 50, 30, 40, 100, 20])
    ->addHeat('Income', [70, 10, 80, 20, 60, 40])
    ->setMarkers(['#FFA41B', '#4F46E5'], 7, 10)
    ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June']);
```

<HeatMapChart />

## Radar Chart

```php
return $this->chart->radarChart()
    ->setTitle('Individual Player Stats.')
    ->setSubtitle('Season 2021.')
    ->addData('Stats', [70, 93, 78, 97, 50, 90])
    ->setXAxis(['Pass', 'Dribble', 'Shot', 'Stamina', 'Long shots', 'Tactical'])
    ->setMarkers(['#303F9F'], 7, 10);
```

<RadarChart />