var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */


elixir(function(mix) {
    mix.less('./assets/less/app.less', './dist/css/orchid.css');


    mix.copy('./assets/vendor/prism', './dist/prism');
    mix.copy('./assets/vendor/bootstrap/dist/fonts/', './dist/fonts');
    mix.copy('./assets/vendor/simple-line-icons/fonts/','./dist/fonts');

    mix.scripts([
        "./assets/vendor/marked/marked.min.js",
        "./assets/vendor/vue/dist/vue.min.js",
        "./assets/vendor/vue-resource/dist/vue-resource.min.js",
        "./assets/vendor/prism/prism.js",
        "./assets/vendor/prism/components/prism-php.js",
        "./assets/vendor/prism/components/prism-php-extras.js",
        "./assets/vendor/prism/components/prism-javascript.js",
        "./assets/js/app.js"
    ], './dist/js/orchid.js');

});

