import { expect } from 'chai';

import * as generic_library from './../src/generic_library';

describe('Generic Tests', () => {
  describe('Testing factorial()', () => {
    it('for factorial(9)', done => {
      expect(generic_library.factorial(-2)).to.equal(0);
      expect(generic_library.factorial(0)).to.equal(1);
      expect(generic_library.factorial(1)).to.equal(1);
      expect(generic_library.factorial(4)).to.equal(24);
      expect(generic_library.factorial(6)).to.equal(720);
      expect(generic_library.factorial(9)).to.equal(362880);

      done();
    });
  });

  describe('Testing isNumPalindrome()', () => {
    it('for various numbers', done => {
      expect(generic_library.isNumPalindrome(1)).to.equal(true);
      expect(generic_library.isNumPalindrome(8)).to.equal(true);
      expect(generic_library.isNumPalindrome(11)).to.equal(true);
      expect(generic_library.isNumPalindrome(13)).to.equal(false);
      expect(generic_library.isNumPalindrome(44)).to.equal(true);
      expect(generic_library.isNumPalindrome(45)).to.equal(false);
      expect(generic_library.isNumPalindrome(123)).to.equal(false);
      expect(generic_library.isNumPalindrome(141)).to.equal(true);
      expect(generic_library.isNumPalindrome(144)).to.equal(false);
      expect(generic_library.isNumPalindrome(145)).to.equal(false);
      expect(generic_library.isNumPalindrome(151)).to.equal(true);
      expect(generic_library.isNumPalindrome(222)).to.equal(true);
      expect(generic_library.isNumPalindrome(242)).to.equal(true);
      expect(generic_library.isNumPalindrome(244)).to.equal(false);
      expect(generic_library.isNumPalindrome(444)).to.equal(true);
      expect(generic_library.isNumPalindrome(445)).to.equal(false);
      expect(generic_library.isNumPalindrome(544)).to.equal(false);
      expect(generic_library.isNumPalindrome(2468)).to.equal(false);
      expect(generic_library.isNumPalindrome(5445)).to.equal(true);

      done();
    });
  });

  describe('Testing isPalindrome()', () => {
    it('for various numbers', done => {
      expect(generic_library.isPalindrome("..")).to.equal(true);
      expect(generic_library.isPalindrome("1")).to.equal(true);
      expect(generic_library.isPalindrome("144")).to.equal(false);
      expect(generic_library.isPalindrome("5445")).to.equal(true);
      expect(generic_library.isPalindrome("aa")).to.equal(true);
      expect(generic_library.isPalindrome("base")).to.equal(false);
      expect(generic_library.isPalindrome("ebb")).to.equal(false);
      expect(generic_library.isPalindrome("madam")).to.equal(true);
      expect(generic_library.isPalindrome("test")).to.equal(false);

      done();
    });
  });

  describe('Testing isPrime()', () => {
    it('for various numbers', done => {
      expect(generic_library.isPrime(1)).to.equal(false);
      expect(generic_library.isPrime(3)).to.equal(true);
      expect(generic_library.isPrime(8)).to.equal(false);
      expect(generic_library.isPrime(11)).to.equal(true);
      expect(generic_library.isPrime(13)).to.equal(true);
      expect(generic_library.isPrime(44)).to.equal(false);
      expect(generic_library.isPrime(45)).to.equal(false);
      expect(generic_library.isPrime(101)).to.equal(true);
      expect(generic_library.isPrime(123)).to.equal(false);
      expect(generic_library.isPrime(144)).to.equal(false);
      expect(generic_library.isPrime(145)).to.equal(false);
      expect(generic_library.isPrime(151)).to.equal(true);
      expect(generic_library.isPrime(222)).to.equal(false);

      done();
    });
  });

});
