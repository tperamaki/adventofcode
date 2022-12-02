import { readFileSync } from 'fs';

const rawInput = readFileSync('./input/2.txt');
const betterInput = rawInput
  .toLocaleString()
  .split('\n')
  .map((row) => row.split(' '));

// X rock, Y paper, Z scissors
const pointsForSelection = (sel) => {
  switch (sel) {
    case 'X':
      return 1;
    case 'Y':
      return 2;
    case 'Z':
      return 3;
  }
};

// A rock, B Paper, C scissors
// X rock, Y paper, Z scissors
const pointsForRound = (opp, me) => {
  switch (opp) {
    case 'A':
      return me === 'Y' ? 6 : me === 'X' ? 3 : 0;
    case 'B':
      return me === 'Z' ? 6 : me === 'Y' ? 3 : 0;
    case 'C':
      return me === 'X' ? 6 : me === 'Z' ? 3 : 0;
  }
};

// A rock, B Paper, C scissors
// X lose, Y draw, Z win
// returns X rock, Y paper, Z scissors
const choiceForDesiredResult = (opp, result) => {
  switch (result) {
    case 'Y':
      return opp === 'A' ? 'X' : opp === 'B' ? 'Y' : 'Z';
    case 'X':
      return opp === 'A' ? 'Z' : opp === 'B' ? 'X' : 'Y';
    case 'Z':
      return opp === 'A' ? 'Y' : opp === 'B' ? 'Z' : 'X';
  }
};

const a = () => {
  return betterInput.reduce((prev, cur) => prev + pointsForSelection(cur[1]) + pointsForRound(cur[0], cur[1]), 0);
};

const b = () => {
  return betterInput.reduce((prev, cur) => {
    const choice = choiceForDesiredResult(cur[0], cur[1]);
    return prev + pointsForSelection(choice) + pointsForRound(cur[0], choice);
  }, 0);
};

// RUN A
console.log('a');
console.log(a());
console.log('a end');

// RUN B
console.log('b');
console.log(b());
console.log('b end');
