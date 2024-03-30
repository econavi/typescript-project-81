import { expect, test } from 'vitest';

import Tag from './Tag';

test.concurrent('to be "br"', async () => {
  expect(new Tag('br').toString()).toBe('<br>');
});

test.concurrent('to be "checked checkbox"', async () => {
  expect(new Tag('input', { type: 'checkbox', checked: true }).toString()).toBe('<input type="checkbox" checked>');
});

test.concurrent('to be "image"', async () => {
  expect(new Tag('img', { src: 'path/to/image' }).toString()).toBe('<img src="path/to/image">');
});

test.concurrent('to be "submit input"', async () => {
  expect(new Tag('input', { type: 'submit', value: 'Save' }).toString()).toBe('<input type="submit" value="Save">');
});

test.concurrent('to be "label Email"', async () => {
  expect(new Tag('label', {}, 'Email').toString()).toBe('<label>Email</label>');
});

test.concurrent('to be "label with For attribute"', async () => {
  expect(new Tag('label', { for: 'email' }, 'Email').toString()).toBe('<label for="email">Email</label>');
});

test.concurrent('to be "empty div"', async () => {
  expect(new Tag('div').toString()).toBe('<div></div>');
});
