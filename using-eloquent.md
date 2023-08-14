# Using Eloquent

Let's render a pie chart with two group of users, the first `60` users and the remain users:

Create the chart object:

```shell
php artisan make:chart MonthlyUsersChart
```

The Chart:

```php
return $this->chart->pieChart()
    ->setTitle('Current Users')
    ->addData([
        \App\Models\User::where('id', '<=', 60)->count(),
        \App\Models\User::where('id', '>', 60)->count()
    ])
    ->setColors(['#ffc63b', '#ff6384'])
    ->setLabels(['Active users', 'Inactive users']);
```

Here another example of a Line Chart showing six different IDs one for each month:

```php
return $this->chart->lineChart()
    ->setTitle('Monthly Users')
    ->addLine('Active users', \App\Models\User::query()->inRandomOrder()->limit(6)->pluck('id')->toArray())
    ->addLine('Inactive users', \App\Models\User::query()->inRandomOrder()->limit(6)->pluck('id')->toArray())
    ->setXAxis(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'])
    ->setColors(['#ffc63b', '#ff6384']);
```

Those are pretty simple examples, to illustrate how to use a chart object with eloquent.