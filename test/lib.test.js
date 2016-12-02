'use strict';

import { expect } from 'chai';
import { color2argb, size2pt, css2style, getBorder } from '../src/lib';

describe('Test: lib.js', () => {
  it('should color2argb ok', () => {
    expect(color2argb('red')).to.equal('ffff0000');
    expect(color2argb('#fff')).to.equal('ffffffff');
    expect(color2argb('rgba (255, 0, 0, .5)')).to.equal('80ff0000');
  });

  it('should size2pt ok', () => {
    expect(size2pt('12pt')).to.equal(12);
    expect(size2pt('1em')).to.equal(12);
    expect(size2pt('16px')).to.equal(12);
    expect(size2pt('100%')).to.equal(12);
    expect(size2pt('')).to.equal(12);
    expect(size2pt('wrong')).to.equal(12);
  });

  it('should css2style ok', () => {
    const css = css2style({
      border: '1px solid #333'
    });
    expect(css.borderWidth).to.equal('1px');
    expect(css['border-left-style']).to.equal('solid');
    expect(css['border-right-color']).to.equal('#333');
  });

  it('should getBorder ok', () => {
    const css1 = css2style({
      borderLeft: '1px solid #333'
    });
    expect(getBorder(css1, 'left')).to.deep.equal({ style: 'thin', color: 'ff333333' });

    const css2 = css2style({
      borderLeft: '3px dashed #333'
    });
    expect(getBorder(css2, 'left')).to.deep.equal({ style: 'dashed', color: 'ff333333' });

    const css3 = css2style({
      borderLeft: '3px solid #333'
    });
    expect(getBorder(css3, 'left')).to.deep.equal({ style: 'medium', color: 'ff333333' });

    const css4 = css2style({
      borderLeft: '5px solid #333'
    });
    expect(getBorder(css4, 'left')).to.deep.equal({ style: 'thick', color: 'ff333333' });

    const css5 = css2style({
      borderLeft: '0px solid #333'
    });
    expect(getBorder(css5, 'left')).to.be.null;

    const css6 = css2style({
      borderLeft: '1px solid'
    });
    expect(getBorder(css6, 'left')).to.be.null;
  });
});
