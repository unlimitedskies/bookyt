class DurationInput < Formtastic::Inputs::StringInput
  def input_html_options
    super.merge(:class => "#{super[:class]} time_input", :style => "width: 6em; margin-right: 1em")
  end

  def slider_fragment
    template.tag('div', :class => 'time_slider')
  end

  def to_html
    input_wrapping do
      label_html <<
      builder.text_field(method.to_s + "_from", input_html_options.merge(:id => [object_name, method, 'from'].join('_'))) <<
      builder.text_field(method.to_s + "_to", input_html_options.merge(:id => [object_name, method, 'to'].join('_'))) <<
      slider_fragment
    end
  end
end
