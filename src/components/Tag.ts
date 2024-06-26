const selfClosingTags = [
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
];

type TagName = string;
type Attrs = { [key: string]: string | boolean };

class Tag {
  constructor(
    private tagName: TagName,
    private attrs: Attrs = {},
    private children: Tag | string = '',
  ) {}

  toString(): string {
    const isSelfClosingTag = selfClosingTags.includes(this.tagName);
    const closedTagPart = isSelfClosingTag ? '' : `</${this.tagName}>`;
    const attrs = this.buildAttrs() || '';

    return `<${this.tagName}${attrs}>${this.children.toString()}${closedTagPart}`;
  }

  private buildAttrs(): string {
    const attrsEntries = Object.entries(this.attrs);

    if (attrsEntries.length === 0) return '';

    const result = attrsEntries
      .map(([key, value]) => {
        if (typeof value === 'boolean') return key;
        return `${key}="${value}"`;
      })
      .join(' ');

    return result ? ` ${result}` : '';
  }
}

export default Tag;
