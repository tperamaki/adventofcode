import { input } from './input/2.mjs';

const betterInput = input
  .split(' ')
  .reduce((output, current, currentIndex, currentArray) => {
    if (currentIndex % 3 === 0) {
      return [
        ...output,
        {
          min: parseInt(current.substring(0, current.indexOf('-')), 10),
          max: parseInt(current.substring(current.indexOf('-') + 1), 10),
          letter: currentArray[currentIndex + 1].charAt(0),
          pwd: currentArray[currentIndex + 2]
        }
      ];
    }
    return output;
  }, []);

const isPasswordValidA = (password) => {
  const count = password.pwd
    .split('')
    .filter((current) => current === password.letter).length;
  return count >= password.min && count <= password.max;
};

const isPasswordValidB = (password) => {
  const a = password.pwd.charAt(password.min - 1) === password.letter;
  const b = password.pwd.charAt(password.max - 1) === password.letter;
  return (a || b) && !(a && b);
};

console.log(
  betterInput.reduce(
    (total, current) => (isPasswordValidA(current) ? total + 1 : total),
    0
  )
);
console.log(
  betterInput.reduce(
    (total, current) => (isPasswordValidB(current) ? total + 1 : total),
    0
  )
);
