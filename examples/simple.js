const fs = require('fs');
const htmlTo = require('../lib');

htmlTo(`
  <style type="text/css">
    table th {
      color: #333;
      height: 20px;
      background-color: #f1f1f1;
      border: 1px solid #eee;
    }
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
  <table>
    <tr>
      <th>foo</th>
      <th>bar</th>
    </tr>
    <tr>
      <th>hello</th>
      <th>world</th>
    </tr>
  </table>
`, (err, file) => {
  file.saveAs()
    .pipe(fs.createWriteStream(__dirname + '/simple.xlsx'))
    .on('finish', () => console.log('Done.'));
});