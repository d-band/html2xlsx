import xlsx from 'better-xlsx';
import juice from 'juice';
import cheerio from 'cheerio';

module.exports = (html, callback, options = {}) => {
  juice.juiceResources(html, options.juice || {}, (err, text) => {
    if (err) return callback(err);

    const file = new xlsx.File();
    const $ = cheerio.load(text);

    let index = 1;
    $('table').each((ti, table) => {
      const sheet = file.addSheet(`Sheet${index}`);
      $('tr', table).each((hi, th) => {
        const row = sheet.addRow();
        $('th, td', th).each((di, td) => {
          const cell = row.addCell();
          cell.value = $(td).text();
        });
      });
      index++;
    });

    callback(null, file);
  });
};
