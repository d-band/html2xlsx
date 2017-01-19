import color from 'tinycolor2';
import { CSSStyleDeclaration } from 'cssstyle';

export function color2argb (c) {
  const rgba = color(c).toHex8();
  return rgba.substr(6) + rgba.substr(0, 6);
}

export function size2pt (s) {
  const num = size2px(s);
  if (num > 0) {
    return num * 72 / 96;
  }
  return 12;
}

export function size2px (s) {
  if (!s) return 0;

  const pt = s.match(/([.\d]+)pt/i);
  if (pt && pt.length === 2) {
    return parseFloat(pt[1], 10) * 96 / 72;
  }
  const em = s.match(/([.\d]+)em/i);
  if (em && em.length === 2) {
    return parseFloat(em[1], 10) * 16;
  }
  const px = s.match(/([.\d]+)px/i);
  if (px && px.length === 2) {
    return parseFloat(px[1], 10);
  }
  const pe = s.match(/([.\d]+)%/i);
  if (pe && pe.length === 2) {
    return (parseFloat(pe[1], 10) / 100) * 16;
  }
  return 0;
}

export function css2style (css = {}) {
  const style = new CSSStyleDeclaration();
  for (const k of Object.keys(css)) {
    style[k] = css[k];
  }
  return style;
}

export function getBorder (css, type) {
  let color = css[`border-${type}-color`];
  let style = css[`border-${type}-style`];
  let width = css[`border-${type}-width`];

  if (!color) return null;

  width = size2px(width);
  if (width <= 0) return null;

  color = color2argb(color);

  if (style === 'dashed' || style === 'dotted' || style === 'double') {
    return { style, color };
  }
  style = 'thin';
  if (width >= 3 && width < 5) {
    style = 'medium';
  }
  if (width >= 5) {
    style = 'thick';
  }
  return { style, color };
}
