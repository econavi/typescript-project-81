[![Actions Status](https://github.com/econavi/typescript-project-81/actions/workflows/main.yml/badge.svg)](https://github.com/econavi/typescript-project-81/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/da5175ccd99596802d8c/maintainability)](https://codeclimate.com/github/econavi/typescript-project-81/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/da5175ccd99596802d8c/test_coverage)](https://codeclimate.com/github/econavi/typescript-project-81/test_coverage)

### Hexlet tests and linter status:

[![Actions Status](https://github.com/econavi/typescript-project-81/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/econavi/typescript-project-81/actions)

# Example
```
const template = { name: 'rob', job: 'hexlet', gender: 'm' };

const form = FormBuilder.formFor(template, { method: 'post' }, (f) => {
    f.input('name');
    f.input('job', { as: 'textarea' });
    f.submit('Create');
});

console.log(form);

// <form action="/users" method="post">
//   <label for="name">Name</label>
//   <input name="name" value="" type="text">
//   <label for="job">Job</label>
//   <textarea cols="20" rows="40" name="job">hexlet</textarea>
//   <input type="submit" value="Create">
// </form>
```
