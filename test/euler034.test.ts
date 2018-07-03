import { expect } from 'chai';

import * as euler034 from './../src/euler034';

describe('Euler034 Tests', () => {
  describe('Testing function()', () => {
    it('for various numbers', done => {
      expect(true).to.equal(true);

      done();
    });
  });

  describe('Testing checkFactSum()', () => {
    it('for various numbers', done => {
      expect(euler034.checkFactSum(144)).to.equal(0);
      expect(euler034.checkFactSum(145)).to.equal(145);
      expect(euler034.checkFactSum(40585)).to.equal(40585);

      done();
    });
  });
});
