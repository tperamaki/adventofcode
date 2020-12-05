import { readFileSync } from 'fs';

const rawInput = readFileSync('./input/5.txt');

const betterInput = rawInput.toLocaleString().split('\n');

const maxRows = 127;
const maxSeats = 7;

const getSeat = (input) => {
  const seat = {
    row: 0,
    column: 0,
  };
  for (let i = 0; i < 7; i++) {
    seat.row = input.charAt(i) === 'B' ? 
    Math.round(seat.row + maxRows/Math.pow(2, i+1)) : 
    seat.row;
  }
  for (let i = 0; i < 3; i++) {
    seat.column = input.charAt(i+7) === 'R' ?
    Math.round(seat.column + maxSeats/Math.pow(2, i+1)) :
    seat.column;
  }
  return seat;
};

const getSeats = (input) => {
  return input.map(getSeat);
};

const getListOfIds = (input) => {
  return getSeats(input).map((seat) => (seat.row * 8) + seat.column);
};

const a = () => {
  console.log(getListOfIds(betterInput).reduce((prev, cur) => {
    if (cur > prev) {
      return cur;
    }
    return prev;
  }));
};

const b = () => {
  // match 6 rows
  const sortedSeats = getSeats(betterInput).sort((a, b) => a.row !== b.row ? a.row - b.row : a.column - b.column);
  let firstPartialRow = -1;
  let firstFullRowFound = false;
  for (let i = 0; i < maxRows+1; i++) {
    if (sortedSeats.filter((seat) => seat.row === i).length < 8 && firstFullRowFound) {
      firstPartialRow = i;
      break;
    } else if (sortedSeats.filter((seat) => seat.row === i).length === 8) {
      firstFullRowFound = true;
    }
  }
  sortedSeats.filter((seat) => seat.row === firstPartialRow).forEach((seat) => {
    console.log(seat);
    console.log((seat.row * 8) + seat.column);
  });
}

a();
b();
