import xlsx from 'better-xlsx';
import juice from 'juice';
import cheerio from 'cheerio';
import { color2argb, size2pt, css2style, getBorder } from './lib';

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
          const $td = $(td);
          const cell = row.addCell();
          const css = css2style($td.css());

          cell.value = $td.text();
          const style = new xlsx.Style();
          // Font
          style.font.color = color2argb(css.color || '#000');
          style.font.size = size2pt(css.fontSize);
          style.font.name = css.fontFamily || 'Verdana';
          style.font.bold = css.fontWeight === 'bold';
          style.font.italic = css.fontStyle === 'italic';
          style.font.underline = css.textDecoration === 'underline';
          // Fill
          const bgColor = css.backgroundColor;
          if (bgColor) {
            style.fill.patternType = 'solid';
            style.fill.fgColor = color2argb(bgColor);
          }
          // Border
          const left = getBorder(css, 'left');
          if (left) {
            style.border.left = left.style;
            style.border.leftColor = left.color;
          }
          const right = getBorder(css, 'right');
          if (right) {
            style.border.right = right.style;
            style.border.rightColor = right.color;
          }
          const top = getBorder(css, 'top');
          if (top) {
            style.border.top = top.style;
            style.border.topColor = top.color;
          }
          const bottom = getBorder(css, 'bottom');
          if (bottom) {
            style.border.bottom = bottom.style;
            style.border.bottomColor = bottom.color;
          }
          // Align
          const hMap = {
            left: 'left',
            right: 'right',
            center: 'center',
            justify: 'justify'
          };
          if (css.textAlign && hMap[css.textAlign]) {
            style.align.h = hMap[css.textAlign];
          }
          const vMap = {
            top: 'top',
            bottom: 'bottom',
            middle: 'center'
          };
          if (css.verticalAlign && vMap[css.verticalAlign]) {
            style.align.v = vMap[css.verticalAlign];
          }
          cell.style = style;
        });
      });
      index++;
    });

    callback(null, file);
  });
};
