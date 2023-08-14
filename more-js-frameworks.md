# More JS Frameworks

You can return a chart object, to be consumed by any other Javascript framework like ReactJS, Angular, etc, using the method toJson().

## ToJson

In terminal execute this command.

```bash
php artisan make:chart MonthlyUsersChart --json
```

It would generate a chart class that is able to return as a response.

```php
return $this->chart->pieChart()
    ->setTitle('Users')
    ->addData([
        \App\Models\User::where('id', '<=', 20)->count(),
        \App\Models\User::where('id', '>', 20)->count()
    ])
    ->setColors(['#ffc63b', '#ff6384'])
    ->setLabels(['Active users', 'Inactive users'])
    ->toJson();

return $chart;
```

## Output

```json
{
    "id":"ylbhrsxwgicnkumtpojqdvaez",
    "options":{
        "chart":{
            "type":"area",
            "height":500,
            "width":"100%",
            "toolbar":{"show":false},
            "zoom":{"enabled":true}
        },
        "plotOptions":{"bar":{"horizontal":false}},
        "colors":["#008FFB","#00E396","#feb019","#ff455f","#775dd0","#80effe","#0077B5","#ff6384","#c9cbcf","#0057ff","00a9f4","#2ccdc9","#5e72e4"],
        "series":[
            {
                "name":"Physical sales",
                "data":[40,93,35,42,18,82]
            },
            {
                "name":"Digital sales",
                "data":[70,29,77,28,55,45]
            }
        ],
        "dataLabels":{"enabled":true},
        "title":{"text":"Sales during 2021."},
        "subtitle":{"text":"Physical sales vs Digital sales.","align":"left"},
        "xaxis":{"categories":["January","February","March","April","May","June"]},
        "grid":{"show":false},
        "markers":{"show":false}
    }
}
```