import xlsx from 'better-xlsx';
import juice from 'juice';
import cheerio from 'cheerio';
import moment from 'moment';
import { color2argb, size2pt, css2style, getBorder } from './lib';

module.exports = (html, callback, options = {}) => {
  juice.juiceResources(html, options.juice || {}, (err, text) => {
    if (err) return callback(err);

    const file = new xlsx.File();
    const $ = cheerio.load(text);

    $('table').each((ti, table) => {
      const sheet = file.addSheet(`Sheet${ti + 1}`);
      const maxW = [];
      const offsets = [];
      $('tr', table).each((hi, th) => {
        if (offsets[hi] === undefined) {
          offsets[hi] = 0;
        }
        let maxH = 20; // pt
        $('th, td', th).each((di, td) => {
          const $td = $(td);
          const rs = parseInt($td.attr('rowspan'), 10) || 1;
          const cs = parseInt($td.attr('colspan'), 10) || 1;

          for (let r = 0; r < rs; r++) {
            for (let c = 0; c < cs; c++) {
              sheet.cell(hi + r, offsets[hi] + c);
            }
          }

          const css = css2style($td.css());
          const fsize = size2pt(css.fontSize);
          // Row Height & Col Width
          if (css.height) {
            const pt = size2pt(css.height);
            if (pt > maxH) {
              maxH = pt / rs;
            }
          }
          if (css.width) {
            if (!maxW[di]) {
              maxW[di] = 10;
            }
            const tmp = size2pt(css.width) / fsize;
            if (maxW[di] < tmp) {
              maxW[di] = tmp / cs;
            }
          }
          const style = new xlsx.Style();
          // Font
          style.font.color = color2argb(css.color || '#000');
          style.font.size = fsize;
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
          // Cell
          const cell = sheet.cell(hi, offsets[hi]);
          // Set value type
          const text = $td.text().trim();
          const type = $td.attr('type') || $td.attr('data-type') || '';
          switch (type.toLowerCase()) {
            case 'number':
              cell.setNumber(text);
              break;
            case 'bool':
              cell.setBool(text === 'true' || text === '1');
              break;
            case 'formula':
              cell.setFormula(text);
              break;
            case 'date':
              cell.setDate(moment(text).toDate());
              break;
            case 'datetime':
              cell.setDateTime(moment(text).toDate());
              break;
            default:
              cell.value = text;
          }
          cell.style = style;

          if (rs > 1) {
            cell.vMerge = rs - 1;
          }
          if (cs > 1) {
            cell.hMerge = cs - 1;
          }

          for (let r = 0; r < rs; r++) {
            if (offsets[hi + r] === undefined) {
              offsets[hi + r] = 0;
            }
            offsets[hi + r] += cs;
          }
        });
        sheet.rows[hi].setHeightCM(maxH * 0.03528);
      });
      // Set col width
      for (let i = 0; i < maxW.length; i++) {
        const w = maxW[i];
        if (w) {
          sheet.col(i).width = w;
        }
      }
    });

    callback(null, file);
  });
};
