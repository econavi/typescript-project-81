import Tag from 'src/Tag';

type InputMethod = (name: string, attrs?: Record<string, string | number>) => void;

type Template = Record<string, string>;

type Options = Record<string, string>;

type Callback = (f: { input: InputMethod }) => void;

export default class FormBuilder {
  static fields: Tag[] = [];

  static template: Template = {};

  static form_for(template: Template, options: Options, callback: Callback) {
    this.template = template;
    this.fields = [];

    callback({ input: this.input });

    const form = new Tag(
      'form',
      {
        action: options.url ?? '#',
        method: options.method ?? 'post',
      },
      this.fields.join(''),
    );

    return form.toString();
  }

  static input: InputMethod = (name, attrs) => {
    if (!this.template[name]) {
      throw new Error("Field 'age' does not exist in the template.");
    }

    if (attrs?.as === 'textarea') {
      const textarea = new Tag(
        'textarea',
        {
          name,
          cols: '20',
          rows: '40',
          ...attrs,
        },
        this.template[name],
      );

      this.fields.push(textarea);

      return;
    }

    const field = new Tag('input', {
      name,
      type: 'text',
      value: this.template[name],
      ...attrs,
    });

    this.fields.push(field);
  };
}
