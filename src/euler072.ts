import {sieveOfEratosthenes, sum} from './generic_library';

export function euler072() {
  let sieve : Array<number> = sieveOfEratosthenes(1000000);

  let result : number = sum(sieve);

  return result;
}
