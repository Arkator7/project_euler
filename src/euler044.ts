export function euler044() {
  let min : number = 1000;
  let max: number = 2500;

  // Formulate pentagonal numbers
  let pentagonal: number[] = generateNumbers(min, max);

  let list_of_sum: Array<Components> = new Array<Components>();
  let list_of_difference: Array<Components> = new Array<Components>();

  for (var i = min; i < max; i++) {
    let pentSum : Components = checkSum(i, pentagonal);

    if (pentSum.left != 0 && pentSum.right != 0) {
      list_of_sum.push(pentSum);
    }
  }

  for (var i = 0; i < list_of_sum.length; i++) {
    let pentDiff : Components = checkDifference(
      list_of_sum[i],
      pentagonal
    );

    if (pentDiff.left != 0 && pentDiff.right != 0) {
      list_of_difference.push(pentDiff);
    }
  }

  let result : number = 0;

  for (var i = 0; i < list_of_difference.length; i++) {
    result = generateNumber(list_of_difference[i].right) - generateNumber(list_of_difference[i].left);
  }

  return result;
}

export function generateNumber(index: number): number {
  return (index * (3 * index - 1)) / 2;
}

export function generateNumbers(min: number = 0, iteration: number): number[] {
  let pent: number[] = new Array(iteration);

  for (var i = min; i < iteration; i++) {
    pent[i] = generateNumber(i);
  }

  return pent;
}

export function checkSum(index: number, pent: number[]): Components {
  let result: Components = new Components(0,0,0);

  let pentNum: number = pent[index];

  for (var i = 1; i < index; i++) {
    let difference = pentNum - pent[i];

    if (isPent(difference, pent) != -1 && pent[i] < difference) {
      result = new Components(isPent(pent[i], pent), isPent(difference, pent), isPent(pentNum, pent));
    }
  }

  return result;
}

export function checkDifference(
  components: Components,
  pent: number[]
): Components {
  let result: Components = new Components(0,0,0);

  let left_pentNum: number = pent[components.left];
  let right_pentNum: number = pent[components.right];

  let diff: number = right_pentNum - left_pentNum;

  if (isPent(diff, pent) != -1) {
    result = components;
  }

  return result;
}

export function isPent(num: number, pent: number[]): number {
  for (var i = 0; i < pent.length; i++) {
    if (pent[i] == num) {
      return i;
    }
  }

  return -1;
}

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
