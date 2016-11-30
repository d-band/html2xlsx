'use strict';

import { expect } from 'chai';
import htmlTo from '../src/index';

describe('Test: index.js', () => {
  it('should htmlToXlsx ok', () => {
    htmlTo();
    expect(1).to.equal(1);
  });
});
