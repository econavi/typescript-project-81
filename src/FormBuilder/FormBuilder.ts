import Tag from 'src/Tag';

type Template = Record<string, string>;

type Options = Record<string, string>;

type Callback = <T>(fn: T) => void;

export default class FormBuilder {
  static form_for(template: Template, options: Options, callback: Callback) {
    console.log({ template, options, callback });

    const form = new Tag('form', {
      action: options.url ?? '#',
      method: 'post',
    });

    return form.toString();
  }
}
