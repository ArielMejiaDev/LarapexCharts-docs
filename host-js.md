# Host JS File

Alternatively, if you prefer to host the file instead using the cdn, you can run the command:

```shell
php artisan vendor:publish --tag=larapex-charts-apexcharts-script
```

The file would be hosted in `public/vendor/larapex-charts/apexcharts.js` 

To reference the file in `blade` views just use the `@asset` directive with the file location:

```html
<script src="{{ @asset('vendor/larapex-charts/apexcharts.js') }}"></script>
```