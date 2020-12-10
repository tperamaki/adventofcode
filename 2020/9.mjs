import { readFileSync } from 'fs';

const rawInput = readFileSync('./input/9.txt');
const betterInput = rawInput.toLocaleString().split('\n').map((value) => parseInt(value, 10));

const findAMatchingSum = (input, offset, range) => {
  for (let i = 0; i < range; i++) {
    const numberToFind = input[offset] - input[offset-range+i];
    for (let j = 0; j < range; j++) {
      if (input[offset-range+j-1] === numberToFind) {
        return true;
      }
    }
  }
  return false;
};

const a = () => {
  const range = 25;
  for (let i = range; i < betterInput.length; i++) {
    if (findAMatchingSum(betterInput, i, range)) {
      continue;
    }
    return betterInput[i];
  }
};

const b = (target) => {
  // Increase the sample size until a match is found
  for (let i = 2; i < 25; i++) {
    for (let j = 0; j <= betterInput.length-i; j++) {
      let sum = 0;
      for (let k = 0; k < i; k++) {
        sum += betterInput[j+k];
      }
      if (sum === target) {
        let smallest = Infinity;
        let largest = -Infinity;
        for (let k = 0; k < i; k++) {
          if (betterInput[j+k] < smallest) {
            smallest = betterInput[j+k];
          }
          if (betterInput[j+k] > largest) {
            largest = betterInput[j+k];
          }
        }
        console.log(smallest+largest);
        break;
      }
    }
  }
}

const aValue = a();
console.log(aValue);
b(aValue);
