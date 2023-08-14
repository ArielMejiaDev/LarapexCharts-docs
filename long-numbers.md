# Working with long numbers

Some valid & invalid number formats could be:

displaying 30,000:

```php
* 30.000.000  // fail
* 30,000      // fail
* 30,000.00   // fail

// Below are the valid formats

* 30000       // shows -> 30000
* 30.000      // shows -> 30
```

Create a chart with valid number format:

```php
return $this->chart->pieChart()
    ->setTitle('Top 3 scorers of the team.')
    ->setSubtitle('Season 2021.')
    ->addData([20000, 24000, 30000])
    ->setLabels(['Player 7', 'Player 10', 'Player 9']);
```