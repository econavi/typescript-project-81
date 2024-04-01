import { describe, expect, test } from 'vitest';

import FormBuilder from '../src/index.ts';

const template = { name: 'rob', job: 'hexlet', gender: 'm' };

describe('formFor method', () => {
  test('should work', () => {
    const result = '<form method="post" action="#"></form>';
    expect(FormBuilder.formFor(template, {}, () => {})).toBe(result);
  });

  test('with url', () => {
    const result = '<form method="post" action="/users"></form>';
    expect(FormBuilder.formFor(template, { url: '/users' }, () => {})).toBe(result);
  });
});

describe('input method', () => {
  test('input', () => {
    const result = '<form method="post" action="#"><label for="name">Name</label><input name="name" type="text" value="rob"></form>';

    expect(
      FormBuilder.formFor(template, {}, (f) => {
        f.input('name');
      }),
    ).toBe(result);
  });

  test('input with attrs', () => {
    const result = '<form method="post" action="#"><label for="name">Name</label><input name="name" type="text" value="rob" class="user-input"></form>';

    expect(
      FormBuilder.formFor(template, {}, (f) => {
        f.input('name', { class: 'user-input' });
      }),
    ).toBe(result);
  });

  test('two inputs', () => {
    const result = '<form method="post" action="#"><label for="name">Name</label><input name="name" type="text" value="rob"><label for="job">Job</label><input name="job" type="text" value="hexlet"></form>';

    expect(
      FormBuilder.formFor(template, {}, (f) => {
        f.input('name');
        f.input('job');
      }),
    ).toBe(result);
  });

  test('textarea', () => {
    const result = '<form method="post" action="#"><label for="job">Job</label><textarea cols="20" rows="40" name="job">hexlet</textarea></form>';

    expect(
      FormBuilder.formFor(template, {}, (f) => {
        f.input('job', { as: 'textarea' });
      }),
    ).toBe(result);
  });

  test('textarea with attrs', () => {
    const result = '<form method="post" action="#"><label for="job">Job</label><textarea cols="50" rows="50" name="job">hexlet</textarea></form>';

    expect(
      FormBuilder.formFor(template, {}, (f) => {
        f.input('job', { as: 'textarea', cols: 50, rows: 50 });
      }),
    ).toBe(result);
  });

  test('input and textarea', () => {
    const result = '<form method="post" action="#"><label for="name">Name</label><input name="name" type="text" value="rob" class="user-input"><label for="job">Job</label><textarea cols="50" rows="50" name="job">hexlet</textarea></form>';

    expect(
      FormBuilder.formFor(template, {}, (f) => {
        f.input('name', { class: 'user-input' });
        f.input('job', { as: 'textarea', cols: 50, rows: 50 });
      }),
    ).toBe(result);
  });

  test('input with submit', () => {
    const result = '<form method="post" action="#"><label for="name">Name</label><input name="name" type="text" value="rob"><input type="submit" value="Save"></form>';

    expect(
      FormBuilder.formFor(template, {}, (f) => {
        f.input('name');
        f.submit();
      }),
    ).toBe(result);
  });

  test('submit with custom text', () => {
    const result = '<form method="post" action="#"><label for="name">Name</label><input name="name" type="text" value="rob"><input type="submit" value="Wow"></form>';

    expect(
      FormBuilder.formFor(template, {}, (f) => {
        f.input('name');
        f.submit('Wow');
      }),
    ).toBe(result);
  });

  test('throw error', () => {
    expect(() => FormBuilder.formFor(template, {}, (f) => {
      f.input('age');
    })).toThrowError("Field 'age' does not exist in the template.");
  });
});
