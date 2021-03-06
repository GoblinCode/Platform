<?php

namespace Orchid\Foundation\Http\Forms\Systems\Settings;

use Orchid\Forms\Form;
use Orchid\Foundation\Core\Models\Setting;
use Orchid\Foundation\Facades\Alert;

class BaseSettingsForm extends Form
{
    /**
     * @var string
     */
    public $name = 'Base';

    /**
     * Base Model.
     *
     * @var
     */
    protected $model = Setting::class;

    /**
     * Display Settings App.
     */
    public function get()
    {
        $settings = $this->model->get([
            'site_title',
            'site_keywords',
            'site_description',
            'site_adress',
            'site_phone',
            'site_email',
        ], []);

        return view('dashboard::container.systems.settings.base', $settings);
    }

    /**
     * Save Base Settings.
     */
    public function persist()
    {
        $settings = $this->request->except('_token');
        foreach ($settings as $key => $value) {
            $this->model->set($key, $value);
        }
        Alert::success('Message');
    }
}
