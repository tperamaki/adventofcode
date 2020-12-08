import { readFileSync } from 'fs';

const rawInput = readFileSync('./input/8.txt');
const betterInput = rawInput.toLocaleString().split('\n').map((row) => { return { cmd: row.split(' ')[0], value: parseInt(row.split(' ')[1], 10) } });

const runUntilInALoop = (input) => {
  let acc = 0;
  let curCmd = 0;
  const runCmds = [];
  while (!runCmds.includes(curCmd)) {
    if (curCmd > input.length+1) {
      throw new Error("Overflow");
    } else if (curCmd === input.length) {
      console.log(acc);
      return -999999999999;
    }
    runCmds.push(curCmd);
    switch (input[curCmd].cmd) {
      case 'jmp':
        curCmd += input[curCmd].value;
        break;
      case 'acc':
        acc += input[curCmd].value;
      default:
        curCmd += 1;
    }
  }
  return acc;
};

const a = () => {
  console.log(runUntilInALoop(betterInput));
};

const b = () => {
  for (let i = 0; i < betterInput.length; i++) {
    const input = [...betterInput];
    if (input[i].cmd === 'jmp') {
      input[i] = { cmd: 'nop' };
    } else if (input[i].cmd === 'nop') {
      input[i] = { cmd: 'jmp', value: input[i].value };
    } else {
      continue;
    }
    try {
      if (runUntilInALoop(input) === -999999999999) {
        break;
      }
    } catch(e) {
      console.log(e);
      continue;
    }
  }
}

a();
b();
