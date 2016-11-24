#Notice
----------
Notice - this is a one-time message will be deleted the next time.
Notifications are designed to inform about current events related to your website.

Orchid has a convenient call and display notifications on the top of the disposable flash-data.
###Using:

```php
public function store()
{
    Alert::message('Welcome Aboard!');
    return Redirect::home();
}
```

You can also:

```php
Alert::info('Message')
Alert::success('Message')
Alert::error('Message')
Alert::warning('Message')
```



In use, it is found more keys in the session:
- 'flash_notification.message' - Сообщение для отображения
- 'flash_notification.level' - Строка, представляющая тип уведомления (хорошо для применения имен HTML класса)


To display in the desired position requires:
```html
<div class="container">
    @include('dashboard::partials.alert')
    <p>Welcome to my website...</p>
</div>
```