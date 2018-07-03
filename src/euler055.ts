import {isNumPalindrome, reverse} from './generic_library';

export function euler055() {
  let result : number = 0;

  for (let i = 0; i < 10000; i++) {
    if (!isLychrel(i)) {
      result++;
    }
  }

  return result;
}

export function isLychrel(num: number) : boolean {
  let iteration : number = num;

  for (let i = 0; i < 50; i++) {
    iteration = processNum(iteration);

    if (isNumPalindrome(iteration)) {
      return true;
    }
  }

  return false;
}

export function processNum(num: number) : number {
  let reverseNum : number = Number(reverse(num.toString()));

  return num + reverseNum;
}
