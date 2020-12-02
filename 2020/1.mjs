import { input } from './input/1.mjs';

const inputArray = input.split(' ').map(value => parseInt(value, 10));

const a = () => {
  inputArray.some((value) => {
    if (inputArray.includes(2020-value)) {
      console.log(value * (2020-value));
      return true;
    }
    return false;
  });
};

const b = () => {
  inputArray.some((valueA) => inputArray.some((valueB) => {
      if (inputArray.includes(2020-valueA-valueB)) {
        console.log(valueA * valueB * (2020-valueA-valueB));
        return true;
      }
      return false;
  }));
};

a();
b();
