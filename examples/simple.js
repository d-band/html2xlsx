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
`).saveAs()
  .pipe(fs.createWriteStream(__dirname + '/simple.xlsx'))
  .on('finish', () => console.log('Done.'));