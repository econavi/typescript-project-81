import { describe, expect, test } from 'vitest';

import FormBuilder from './FormBuilder';

const template = { name: 'rob', job: 'hexlet', gender: 'm' };

describe('form_for method', () => {
  test('should work', () => {
    const result = '<form action="#" method="post"></form>';
    expect(FormBuilder.form_for(template, {}, () => {})).toBe(result);
  });

  test('with url', () => {
    const result = '<form action="/users" method="post"></form>';
    expect(FormBuilder.form_for(template, { url: '/users' }, () => {})).toBe(result);
  });
});

describe('input method', () => {
  test('input', () => {
    const result = '<form action="#" method="post"><input name="name" type="text" value="rob"></form>';

    expect(
      FormBuilder.form_for(template, {}, (f) => {
        f.input('name');
      }),
    ).toBe(result);
  });

  test('input with attrs', () => {
    const result =
      '<form action="#" method="post"><input name="name" type="text" value="rob" class="user-input"></form>';

    expect(
      FormBuilder.form_for(template, {}, (f) => {
        f.input('name', { class: 'user-input' });
      }),
    ).toBe(result);
  });

  test('two inputs', () => {
    const result =
      '<form action="#" method="post"><input name="name" type="text" value="rob"><input name="job" type="text" value="hexlet"></form>';

    expect(
      FormBuilder.form_for(template, {}, (f) => {
        f.input('name');
        f.input('job');
      }),
    ).toBe(result);
  });

  test('textarea', () => {
    const result =
      '<form action="#" method="post"><textarea name="job" cols="20" rows="40" as="textarea">hexlet</textarea></form>';

    expect(
      FormBuilder.form_for(template, {}, (f) => {
        f.input('job', { as: 'textarea' });
      }),
    ).toBe(result);
  });

  test('textarea with attrs', () => {
    const result =
      '<form action="#" method="post"><textarea name="job" cols="50" rows="50" as="textarea">hexlet</textarea></form>';

    expect(
      FormBuilder.form_for(template, {}, (f) => {
        f.input('job', { as: 'textarea', cols: 50, rows: 50 });
      }),
    ).toBe(result);
  });

  test('input and textarea', () => {
    const result =
      '<form action="#" method="post"><input name="name" type="text" value="rob" class="user-input"><textarea name="job" cols="50" rows="50" as="textarea">hexlet</textarea></form>';

    expect(
      FormBuilder.form_for(template, {}, (f) => {
        f.input('name', { class: 'user-input' });
        f.input('job', { as: 'textarea', cols: 50, rows: 50 });
      }),
    ).toBe(result);
  });

  test('throw error', () => {
    expect(() =>
      FormBuilder.form_for(template, {}, (f) => {
        f.input('age');
      }),
    ).toThrowError("Field 'age' does not exist in the template.");
  });
});
