import Tag from './Tag';

type InputMethod = (name: string, attrs?: Record<string, string | number>) => void;

type SubmitMethod = (text?: string) => void;

type Template = Record<string, string>;

type Options = Record<string, string>;

type Callback = (f: { input: InputMethod; submit: SubmitMethod }) => void;

const toUpperCaseFirstLetter = (text: string): string => {
  const [first, ...tail] = text.split('');
  return [first.toUpperCase(), ...tail].join('');
};

export default class FormBuilder {
  static fields: Tag[] = [];

  static template: Template = {};

  static formFor(template: Template, options: Options, callback: Callback) {
    this.template = template;
    this.fields = [];

    callback({ input: this.input, submit: this.submit });

    const form = new Tag(
      'form',
      {
        method: options.method ?? 'post',
        action: options.url ?? '#',
      },
      this.fields.join(''),
    );

    return form.toString();
  }

  static submit: SubmitMethod = (text) => {
    const button = new Tag('input', {
      type: 'submit',
      value: text ?? 'Save',
    });

    this.fields.push(button);
  };

  static input: InputMethod = (name, attrs) => {
    if (!this.template[name]) {
      throw new Error("Field 'age' does not exist in the template.");
    }

    const label = new Tag('label', { for: name }, toUpperCaseFirstLetter(name));

    this.fields.push(label);

    if (attrs?.as === 'textarea') {
      delete attrs['as']

      const textarea = new Tag(
        'textarea',
        {
          cols: '20',
          rows: '40',
          name,
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
