import { expect } from 'chai';

import * as euler055 from './../src/euler055';

describe('Euler055 Tests', () => {
  describe('Testing isLychrel()', () => {
    it('for various numbers', done => {
      expect(euler055.isLychrel(13)).to.equal(true);
      expect(euler055.isLychrel(19)).to.equal(true);
      expect(euler055.isLychrel(35)).to.equal(true);
      expect(euler055.isLychrel(37)).to.equal(true);
      expect(euler055.isLychrel(40)).to.equal(true);
      expect(euler055.isLychrel(45)).to.equal(true);
      expect(euler055.isLychrel(67)).to.equal(true);
      expect(euler055.isLychrel(88)).to.equal(true);
      expect(euler055.isLychrel(144)).to.equal(true);
      expect(euler055.isLychrel(196)).to.equal(false);
      expect(euler055.isLychrel(267)).to.equal(true);
      expect(euler055.isLychrel(333)).to.equal(true);
      expect(euler055.isLychrel(345)).to.equal(true);
      expect(euler055.isLychrel(399)).to.equal(true);
      expect(euler055.isLychrel(4994)).to.equal(false);

      done();
    });
  });

  describe('Testing processNum()', () => {
    it('for various numbers', done => {
      expect(euler055.processNum(13)).to.equal(44);
      expect(euler055.processNum(19)).to.equal(110);
      expect(euler055.processNum(35)).to.equal(88);
      expect(euler055.processNum(37)).to.equal(110);
      expect(euler055.processNum(40)).to.equal(44);
      expect(euler055.processNum(45)).to.equal(99);
      expect(euler055.processNum(67)).to.equal(143);
      expect(euler055.processNum(88)).to.equal(176);
      expect(euler055.processNum(144)).to.equal(585);
      expect(euler055.processNum(267)).to.equal(1029);
      expect(euler055.processNum(333)).to.equal(666);
      expect(euler055.processNum(345)).to.equal(888);
      expect(euler055.processNum(399)).to.equal(1392);

      done();
    });
  });
});
