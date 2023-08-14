---
outline: deep
---

<script setup>
import FontChart from './components/FontChart.vue';
import GridChart from './components/GridChart.vue';
import AreaChart from './components/AreaChart.vue';
import MarkersChart from './components/MarkersChart.vue';
import SparkLineChart from './components/SparkLineChart.vue';
import DataLabelsChart from './components/DataLabelsChart.vue';
import StackedBarChart from './components/StackedBarChart.vue';
import StackedAreaChart from './components/StackedAreaChart.vue';
</script>

# Customizing Charts

## Change general chart colors schema

In `config/larapex-chart.php`, there is a colors array to customize the chart colors series.

::: code-group
```php [config/larapex-charts.php]
'colors' => [
    '#008FFB', '#00E396', '#feb019', '#ff455f', '#775dd0', '#80effe',
    '#0077B5', '#ff6384', '#c9cbcf', '#0057ff', '00a9f4', '#2ccdc9', '#5e72e4'
]
```
:::

:::danger The colors array only support hexadecimal values as string. 
:::

## Change chart colors dynamically

`setColors()` adds an array of colors on the fly.

<strong>Code</strong>

```php
return $this->chart->lineChart()
    ->setTitle('Sales during 2021.')
    ->setSubtitle('Physical sales vs Digital sales.')
    ->addData('Published posts', [4, 9, 5, 2, 1, 8])
    ->addData('Unpublished posts', [7, 2, 7, 2, 5, 4])
    ->setColors(['#ffc63b', '#ff6384'])
    ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June']);
```

<strong>Output</strong>

<AreaChart :colors="['#ffc63b', '#ff6384']" />

## Customize Fonts

The default font is `Helvetica`, but you can customize font family and font color:

<strong>Code</strong>
```php
return $this->chart->lineChart()
    ->setTitle('Sales during 2021.')
    ->setSubtitle('Physical sales vs Digital sales.')
    ->addData('Published posts', [4, 9, 5, 2, 1, 8])
    ->addData('Unpublished posts', [7, 2, 7, 2, 5, 4])
    ->setColors(['#ffc63b', '#ff6384'])
    ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June'])
    ->setFontFamily('monospace')
    ->setFontColor('#ff6384');
```

<strong>Output</strong>

<FontChart />

## Customize Chart Grid

`setGrid()` adds a default style that would be enough in many cases.

`setGrid()` method is available for:

- Line charts
- Area charts
- Bar charts

<strong>Code</strong>

```php
return $this->chart->areaChart()
    ->setTitle('Sales during 2021.')
    ->setSubtitle('Physical sales vs Digital sales.')
    ->addData('Physical sales', [40, 93, 35, 42, 18, 82])
    ->addData('Digital sales', [70, 29, 77, 28, 55, 45])
    ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June'])
    ->setGrid();
```

<strong>Output</strong>

<GridChart />

You can customize the grid by passing some params for color (hex) & transparency (0.1 - 1.0) values.

<strong>Code</strong>

```php
eturn $this->chart->areaChart()
    ->setTitle('Sales during 2021.')
    ->setSubtitle('Physical sales vs Digital sales.')
    ->addData('Physical sales', [40, 93, 35, 42, 18, 82])
    ->addData('Digital sales', [70, 29, 77, 28, 55, 45])
    ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June'])
    ->setGrid('#3F51B5', 0.1);
```

<strong>Output</strong>

<GridChart :grid-color="'#3F51B5'" />

## Customize Chart Markers

It allows to customize the markers of every chart type.

<strong>Code</strong>

```php
return $this->chart->areaChart()
    ->setTitle('Sales during 2021.')
    ->setSubtitle('Physical sales vs Digital sales.')
    ->addData('Physical sales', [40, 93, 35, 42, 18, 82])
    ->addData('Digital sales', [70, 29, 77, 28, 55, 45])
    ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June'])
    ->setGrid(false, '#3F51B5', 0.1)
    ->setColors(['#FFC107', '#303F9F'])
    ->setMarkers(['#FF5722', '#E040FB'], 7, 10);
```

<strong>Output</strong>

<MarkersChart />

## Set Data Labels

`addData` first param adds a label to every series of data.

<strong>Code</strong>

```php
return $this->chart->areaChart()
    ->setTitle('Sales during 2021.')
    ->setSubtitle('Physical sales vs Digital sales.')
    ->addData('Physical sales', [40, 93, 35, 42, 18, 82])
    ->addData('Digital sales', [70, 29, 77, 28, 55, 45])
    ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June'])
    ->setGrid(false, '#3F51B5', 0.1)
    ->setColors(['#FFC107', '#303F9F'])
    ->setMarkers(['#FF5722', '#E040FB'], 7, 10);
```

<strong>Output</strong>

<DataLabelsChart />

## Set Sparkline

`setSparkline()` removes the `X` & `Y` axes to get a clean chart (very popular for cards):

<strong>Code</strong>

```php
return $this->chart->lineChart()
    ->addData('Published posts', [4, 9, 5, 2, 1, 8])
    ->setSparkline();
```

<strong>Output</strong>

<SparkLineChart />

## Stacked Charts

`setStacked()` place the second data series over the first data series vertically.

`setStacked()` works for:

- Area Chart
- Bar Chart

<strong>Stacked Area Chart Code.</strong>

<strong>Code</strong>

```php
return $this->chart->areaChart()
    ->setTitle('Sales during 2021.')
    ->setSubtitle('Physical sales vs Digital sales.')
    ->addData('Physical sales', [40, 93, 35, 42, 18, 82])
    ->addData('Digital sales', [70, 29, 77, 28, 55, 45])
    ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June'])
    ->setStacked();
```

<strong>Output</strong>

<StackedAreaChart />

<strong>Stacked Bar Chart Code.</strong>

<strong>Code</strong>

```php
return $this->chart->barChart()
    ->setTitle('San Francisco vs Boston.')
    ->setSubtitle('Wins during season 2021.')
    ->addData('San Francisco', [6, 9, 3, 4, 10, 8])
    ->addData('Boston', [7, 3, 8, 2, 6, 4])
    ->setXAxis(['January', 'February', 'March', 'April', 'May', 'June'])
    ->setStacked();
```

<strong>Output</strong>

<StackedBarChart />