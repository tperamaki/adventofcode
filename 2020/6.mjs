import { readFileSync } from 'fs';

const rawInput = readFileSync('./input/6.txt');

const betterInput = rawInput.toLocaleString().split('\n\n');

const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index;
};

const getCountsAnyone = (input) => {
  return input.map((group) => {
    return group.split('').filter((char) => char !== '\n').filter(onlyUnique).length;
  })
};

const getSumOfCounts = (input) => {
  return getCountsAnyone(input).reduce((prev, cur) => {
    return prev + cur;
  }, 0)
};

const getCountsEveryone = (input) => {
  const groupedInput = input.split('\n');
  const possibleChars = groupedInput[0].split('');
  if (groupedInput.length === 1) {
    return possibleChars.length;
  }
  return possibleChars.reduce((prev, cur) => {
    return prev + (groupedInput.every((group) => {
      return group.split('').includes(cur);
    }) ? 1 : 0);
  }, 0)
};

const getSumOfCountsEveryone = (input) => {
  return input.map(getCountsEveryone).reduce((prev, cur) => {
    return prev + cur;
  }, 0)
};

const a = () => {
  console.log(getSumOfCounts(betterInput));
};

const b = () => {
  console.log(getSumOfCountsEveryone(betterInput));
};

a();
b();
