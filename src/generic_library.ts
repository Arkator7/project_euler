export function factorial(num: number) : number {
  if (num >= 0) {
    let result: number = 1;
    let count: number = num;
  
    while (count > 1) {
      result = result * count;
      count--;
    }

    return result;
  } else {
    return 0;
  }
}

export function isNumPalindrome(num: number) : boolean {
  return isPalindrome(num.toString());
}

//https://basarat.gitbooks.io/algorithms/content/docs/quiz/palindrome.html
export function isPalindrome(str:string) : boolean {
  return str.split('').reverse().join('') === str;
}

//Simple prime checker
//https://stackoverflow.com/questions/40200089/is-a-number-prime
export function isPrime(num: number) : boolean {
  for (let i = 2; i < num; i++) {
    if(num % i === 0) return false;
  }

  return num !== 1;
}

//https://basarat.gitbooks.io/algorithms/content/docs/quiz/reverse-string.html
export function reverse(str:string) {
  return str.split('').reverse().join('');
}

export function sieveOfEratosthenes(limit: number) : Array<number> {
  let resultArray : Array<number> = new Array<number>();

  var phi : Array<number> = new Array<number>();

  for (var i = 0; i <= limit; i++){
    phi.push(i);
  }

  var result : number = 0;
  
  for(var i = 2; i <= limit; i++) {
    if (phi[i] == i) {
      for (var j = i; j <= limit; j += i) {
        phi[j] = phi[j] / i * (i - 1);
      }
    }

    resultArray.push(phi[i]);
  }

  return resultArray;
}

export function sum(array : number[]): number {
  let result : number = 0;

  for (var i = 0; i < array.length; i++) {
    result += array[i];    
  }

  return result;
}
