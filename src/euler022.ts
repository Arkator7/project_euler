import fs = require('fs');

export function euler022() {
  let input: string = fs.readFileSync('./src/euler022_names.txt','utf8');

  let split: string[] = input.replace(/\"/g,"").split(',').sort();

  let sum = 0;

  for (let i = 0; i < split.length; i++) {
    sum += sumWithPlace(split[i], i + 1);
  } 

  return sum;
}

function sumWithPlace(name: string, multiplier: number) : number {
  let sum = 0;
  const ay = 65; //ascii for "A" = 65

  for (let i = 0; i < name.length; i++) {
    sum += name.charCodeAt(i) - (ay - 1);
  }

  return sum * multiplier;
}

