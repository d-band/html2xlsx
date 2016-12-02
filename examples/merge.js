const fs = require('fs');
const htmlTo = require('../lib');

htmlTo(`
  <table border="1" cellspacing="0">
    <tr>
      <td rowspan="3">hello</td>
      <td colspan="2">test</td>
      <td colspan="2">world</td>
    </tr>
    <tr>
      <td rowspan="2">foo</td>
      <td>bar</td>
      <td>ok</td>
      <td>haha</td>
    </tr>
    <tr>
      <td colspan="3">foo foo</td>
      <td colspan="1">bar bar</td>
    </tr>
  </table>
`, (err, file) => {
  file.saveAs()
    .pipe(fs.createWriteStream(__dirname + '/merge.xlsx'))
    .on('finish', () => console.log('Done.'));
});