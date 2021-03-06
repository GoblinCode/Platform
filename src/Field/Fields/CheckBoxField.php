<?php

namespace Orchid\Field\Fields;

use Orchid\Field\Field;

class CheckBoxField extends Field
{
    /**
     * @var string
     */
    public $view = 'dashboard::fields.checkbox';
    /**
     * HTML tag.
     *
     * @var string
     */
    protected $tag = 'checkbox';
    /**
     * The rows attribute specifies the visible height of a text area, in lines.
     *
     * @var
     */
    protected $rows;

    /**
     * @param null $attributes
     * @param null $data
     *
     * @return array|\Illuminate\Contracts\View\Factory|\Illuminate\View\View|mixed
     */
    public function create($attributes, $data = null)
    {
        if (is_null($data)) {
            $data = collect();
        }

        $attributes->put('data', $data);

        return view($this->view, $attributes);
    }
}
