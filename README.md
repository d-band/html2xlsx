html2xlsx
===========

> Transform html to excel (just support xlsx)

[![NPM version](https://img.shields.io/npm/v/html2xlsx.svg)](https://www.npmjs.com/package/html2xlsx)
[![NPM downloads](https://img.shields.io/npm/dm/html2xlsx.svg)](https://www.npmjs.com/package/html2xlsx)
[![Build Status](https://travis-ci.org/d-band/html2xlsx.svg?branch=master)](https://travis-ci.org/d-band/html2xlsx)
[![Coverage Status](https://coveralls.io/repos/github/d-band/html2xlsx/badge.svg?branch=master)](https://coveralls.io/github/d-band/html2xlsx?branch=master)
[![Dependency Status](https://david-dm.org/d-band/html2xlsx.svg)](https://david-dm.org/d-band/html2xlsx)

---

## Install

```bash
$ npm install html2xlsx
```

## Usage

- [More Examples](examples)

```
const fs = require('fs');
const htmlTo = require('html2xlsx');

htmlTo(`
  <style type="text/css">
    table td {
      color: #666;
      height: 20px;
      background-color: #f1f1f1;
      border: 1px solid #eee;
    }
  </style>
  <table>
    <tr>
      <td>foo</td>
      <td>bar</td>
    </tr>
    <tr>
      <td>hello</td>
      <td>world</td>
    </tr>
  </table>
`, (err, file) => {
  if (err) return console.error(err);
  
  file.saveAs()
    .pipe(fs.createWriteStream('test.xlsx'))
    .on('finish', () => console.log('Done.'));
});
```

## Report a issue

* [All issues](https://github.com/d-band/html2xlsx/issues)
* [New issue](https://github.com/d-band/html2xlsx/issues/new)

## Reference

- https://github.com/d-band/better-xlsx

## License

html2xlsx is available under the terms of the MIT License.