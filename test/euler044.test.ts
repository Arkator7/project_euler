import { expect } from 'chai';

import * as euler044 from './../src/euler044';

describe('Euler044 Tests', () => {
  let genNum10: number[] = euler044.generateNumbers(0, 10);

  describe('Testing generateNumber()', () => {
    it('for index = 10', done => {
      expect(genNum10[0]).to.equal(0);
      expect(genNum10[3]).to.equal(12);
      expect(genNum10[9]).to.equal(117);

      done();
    });
  });

  describe('Testing checkSum()', () => {
    it('for index = 8', done => {
      let comp: Components = euler044.checkSum(8, genNum10);

      expect(comp.left).to.equal(4);
      expect(comp.right).to.equal(7);
      expect(comp.total).to.equal(8);

      done();
    });

    it('for index = 10', done => {
      let comp: Components = euler044.checkSum(10, genNum10);

      expect(comp.left).to.equal(0);
      expect(comp.right).to.equal(0);
      expect(comp.total).to.equal(0);

      done();
    });
  });

  describe('Testing checkDifference()', () => {
    it('for index = (7,8)', done => {
      let sample_comp: Components = new Components(7, 8, -1);

      let comp: Components = euler044.checkDifference(
        sample_comp,
        genNum10
      );

      expect(comp.left).to.equal(7);
      expect(comp.right).to.equal(8);
      expect(comp.total).to.equal(-1);

      done();
    });

    it('for index = (7,9)', done => {
      let sample_comp: Components = new Components(7, 9, -1);

      let comp: Components = euler044.checkDifference(
        sample_comp,
        genNum10
      );

      expect(comp.left).to.equal(0);
      expect(comp.right).to.equal(0);
      expect(comp.total).to.equal(0);

      done();
    });
  });

  describe('Testing isPent()', () => {
    it('for index = 10', done => {
      expect(euler044.isPent(0, genNum10)).to.equal(0);
      expect(euler044.isPent(12, genNum10)).to.equal(3);
      expect(euler044.isPent(117, genNum10)).to.equal(9);

      expect(euler044.isPent(6, genNum10)).to.equal(-1);
      expect(euler044.isPent(99, genNum10)).to.equal(-1);
      expect(euler044.isPent(120, genNum10)).to.equal(-1);

      done();
    });
  });
});

class Components {
  left: number;
  right: number;
  total: number;

  constructor(left: number, right: number, total: number) {
    this.left = left;
    this.right = right;
    this.total = total;
  }
}
