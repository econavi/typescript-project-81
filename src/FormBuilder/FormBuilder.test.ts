import { describe, expect, test } from 'vitest';

import FormBuilder from './FormBuilder';

describe('form_for method', () => {
  const template = { name: 'rob', job: 'hexlet', gender: 'm' };

  test('should work', () => {
    const result = '<form action="#" method="post"></form>';
    expect(FormBuilder.form_for(template, {}, () => {})).toBe(result);
  });

  test('with url', () => {
    const result = '<form action="/users" method="post"></form>';
    expect(FormBuilder.form_for(template, { url: '/users' }, () => {})).toBe(result);
  });
});
