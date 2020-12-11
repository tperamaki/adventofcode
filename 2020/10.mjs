import { readFileSync } from 'fs';

const rawInput = readFileSync('./input/10.txt');
const betterInput = rawInput.toLocaleString().split('\n').map((value) => parseInt(value, 10)).sort((a, b) => a-b);
betterInput.unshift(0);
betterInput.push(betterInput[betterInput.length-1]+3);
const a = () => {
  let ones = 0;
  let threes = 0;
  betterInput.forEach((cur, i, array) => {
    if (i === 0) return;
    if (cur === array[i-1] + 1) {
      ones += 1;
    } else if (cur === array[i-1] + 3) {
      threes += 1;
    }
  });
  console.log(ones);
  console.log(threes);
  console.log(ones*threes);
};

const possibleChildren = (index) => {
  return betterInput.filter((value) => {
    return value > betterInput[index] && value <= betterInput[index]+3;
  });
}

const b = () => {
  console.log("---Part 2---");
  const nums = [1];
  betterInput.forEach((_, index) => {
    for (let i = 0; i < possibleChildren(index).length; i++) {
      nums[index+i+1] = (nums[index+i+1] ? nums[index+i+1] : 0) + nums[index];
    }
  });
  console.log(nums[nums.length-1]);
}

a();
b();
