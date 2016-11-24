# Скаффолдинг
----------

Скаффолдинг — метод метапрограммирования для создания веб-приложений, взаимодействующих с базой данных.

В конечном итоге у нас будет CRUD (Create, read, update и delete) — это четыре основных операции, при помощи которых можно управлять объектами данных.
Так как реализация CRUD является типичной задачей для любого веб-приложения, Orchid помогает сэкономить время на их разработку.



## Пример


```php
php artisan make:scaffold News --schema="title:string:default('News #1'), body:text"
```
Эта команда сгенерирует:

```php
app/Models/News.php
app/Http/Controllers/TweetController.php
database/migrations/2016_04_25_184550_create_News_table.php
database/seeds/NewsTableSeeder.php
resources/views/dashboard/news/index.blade.php
resources/views/dashboard/news/show.blade.php
resources/views/dashboard/news/edit.blade.php
resources/views/dashboard/news/create.blade.php
```

Так же Вам необходимо сделать:

```php
php artisan migrate
```

И добавить маршрут

```php
Route::group(['prefix' => 'dashboard'], function(){
    Route::resource("news","NewsController");
});
```



> **Примечание:** Не забывайте, что бы включить разграничение прав, необходимо указать в 'middleware' => 'dashboard'
