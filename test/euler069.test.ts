import { expect } from 'chai';

import * as euler069 from './../src/euler069';

describe('Euler069 Tests', () => {
  describe('Testing foundMaxQuotient()', () => {
    it('for various numbers', done => {
      expect(euler069.foundMaxQuotient(10)).to.equal(6);
      expect(euler069.foundMaxQuotient(20)).to.equal(18);
      expect(euler069.foundMaxQuotient(50)).to.equal(30);
      expect(euler069.foundMaxQuotient(100)).to.equal(90);
      expect(euler069.foundMaxQuotient(250)).to.equal(210);
      expect(euler069.foundMaxQuotient(500)).to.equal(420);
      expect(euler069.foundMaxQuotient(1000)).to.equal(840);

      done();
    });
  });
});
