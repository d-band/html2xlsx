const fs = require('fs');
const htmlTo = require('../lib');

htmlTo(`
  <style type="text/css">
    table th, table td {
      width: 400px;
      height: 50px;
      vertical-align: middle;
      text-align: right;
    }
  </style>
  <table>
    <tr>
      <td type="number">123</td>
      <td type="number">123.456</td>
    </tr>
    <tr>
      <td data-type="bool">true</td>
      <td data-type="bool">false</td>
    </tr>
    <tr>
      <td data-type="bool">1</td>
      <td data-type="bool">0</td>
    </tr>
    <tr>
      <td type="formula">SUM(A1:B1)</td>
      <td type="formula">A1-B1</td>
    </tr>
    <tr>
      <td type="date">2013-01-12T12:34:56+08:00</td>
      <td type="datetime">2013-01-12T12:34:56+08:00</td>
    </tr>
    <tr>
      <td>foo</td>
      <td>bar</td>
    </tr>
  </table>
`, (err, file) => {
  file.saveAs()
    .pipe(fs.createWriteStream(__dirname + '/datatype.xlsx'))
    .on('finish', () => console.log('Done.'));
});