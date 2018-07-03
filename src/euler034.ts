import {factorial} from './generic_library';

export function euler034() {
  let result : number = 0;

  //409113 = 9! + 8! + ... + 1!
  for (let i = 10; i <= 409113; i++) {
    result += checkFactSum(i);
  }
  
  return result;
}

export function checkFactSum(i: number) : number {
  let sumOfFacts : number = 0;
  let num : number = i;

  while (num >= 1) {
    let d : number = num % 10;
    num = Math.floor(num / 10);
    sumOfFacts += factorial(d);
  }

  if (sumOfFacts == i) {
    return i;
  } else {
    return 0;
  }
}
