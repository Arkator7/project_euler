import fs = require('fs');

export function euler069() {
  let result : number = 0;

  result = foundMaxQuotient(1000000);

  return result;
}

export function foundMaxQuotient(iteration: number) : number {
  var result : number = 0;
  var multiplier : number = 1;

  var primes : number[] = [2,3,5,7,9,11,13];

  for (var i = 0; i < primes.length; i++) {
    multiplier *= primes[i];

    for (var j = 1; j <= primes[i]; j++) {
      var element = multiplier * j;

      if (element < iteration) {
        result = element;
      }
    }
  }

  return result;
}