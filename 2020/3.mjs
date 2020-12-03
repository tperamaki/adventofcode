import { rawInput } from './input/3.mjs';

const betterInput = rawInput.split(' ').map((row) => row.split(''));
const rows = betterInput.length;
const cols = betterInput[0].length;

const isTree = (col, row) => {

  return betterInput[row][col] == '#';
};

const calculateTreesEncountered = (moveCol, moveRow) => {
  let col = 0;
  let row = 0;
  let count = 0;
  while (row < rows) {
    if (isTree(col, row)) {
      count++;
    }
    col = col+moveCol;
    col = col < 0 ? col+cols : (col >= cols ? col-cols : col);
    row = row+moveRow;
  }
  return count;
};

const a = () => {
  console.log(calculateTreesEncountered(3, 1));
};

const b = () => {
  console.log(
    calculateTreesEncountered(1, 1) *
    calculateTreesEncountered(3, 1) *
    calculateTreesEncountered(5, 1) *
    calculateTreesEncountered(7, 1) *
    calculateTreesEncountered(1, 2)
  );
};

a();
b();
