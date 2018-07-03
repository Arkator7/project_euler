import { expect } from 'chai';

import * as euler076 from './../src/euler076';

describe('Euler076 Tests', () => {
  describe('Testing function()', () => {
    it('for various numbers', done => {
      expect(true).to.equal(true);

      done();
    });
  });

  describe('Testing countSummationPermutations()', () => {
    it('for various numbers', done => {
      expect(euler076.countSummationPermutations(2)).to.equal(1);
      expect(euler076.countSummationPermutations(3)).to.equal(2);
      expect(euler076.countSummationPermutations(4)).to.equal(4);
      expect(euler076.countSummationPermutations(5)).to.equal(6);
      expect(euler076.countSummationPermutations(6)).to.equal(10);
      expect(euler076.countSummationPermutations(7)).to.equal(14);
      expect(euler076.countSummationPermutations(8)).to.equal(21);

      done();
    });
  });
});
