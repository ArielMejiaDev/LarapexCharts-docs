---
outline: deep
---

<script setup>
import PieChart from './components/PieChart.vue';
</script>

# Create a chart

## Create a chart PHP object

On terminal execute this command:

```shell
php artisan make:chart MonthlyUsersChart
```

Then select a chart type (use spacebar to select an option):

```md
- [x] Pie Chart
- [ ] Donut Chart
- [ ] Radial Bar Chart
- [ ] Polar Area Chart
- [ ] Line Chart
- [ ] Area Chart
- [ ] Bar Chart
- [ ] Horizontal Bar Chart
- [ ] HeatMap Chart
- [ ] Radar Chart
```

A chart file would be generated inside `app/Charts/MonthlyUsersChart.php`

```php
<?php

namespace App\Charts;

use ArielMejiaDev\LarapexCharts\LarapexChart;

class MonthlyUsersChart
{
    protected $chart;

    public function __construct(LarapexChart $chart)
    {
        $this->chart = $chart;
    } 
   
    public function build()
    {
        return $this->chart->pieChart()
            ->setTitle('Top 3 scorers of the team.')
            ->setSubtitle('Season 2021.')
            ->addData([40, 50, 30])
            ->setLabels(['Player 7', 'Player 10', 'Player 9']);
    }
}
```

<br><br>

## Return a view with the chart

Create a controller

```php
php artisan make:controller UserController -r
```

On `app/Http/Controllers/UserController.php` inject the chart object:

```php
public function index(MonthlyUsersChart $chart)
{
    return view('users.index', ['chart' => $chart->build()]);
} 
```

Attach a route on `routes/web.php`

```php
Route::get('/users', [UserController::class, 'index'])->name('users.index');
```

<br><br>

## Add the chart to the view

<strong>Create a blade file in terminal:</strong>

```shell
touch resources/views/users/index.blade.php
```

Copy and paste this layout, it is using tailwindcss, but you can use any css styles.

::: code-group
```php [resources/views/users/index.blade.php]

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Chart Sample</title>
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="h-screen bg-gray-100">

<div class="container px-4 mx-auto">

    <div class="p-6 m-20 bg-white rounded shadow">
        {!! $chart->container() !!}
    </div>

</div>

<script src="{{ $chart->cdn() }}"></script>

{{ $chart->script() }}
</body>
</html>
```
:::

## It should looks like this

<PieChart />