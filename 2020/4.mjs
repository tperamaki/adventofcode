import { readFileSync } from 'fs';

const rawInput = readFileSync('./input/4.txt');

const betterInput = rawInput.toLocaleString().split('\n\n');

const isValidPassport = (passport) => {
  return passport.includes('byr:') && passport.includes('iyr:') && passport.includes('eyr:') && passport.includes('hgt:') && passport.includes('hcl:') && passport.includes('ecl:') && passport.includes('pid:');
};

const isValidField = (field) => {
  const fieldName = field.substring(0, 3);
  const fieldValue = field.substring(4);
  if (fieldName === 'byr') {
    return fieldValue >= 1920 && fieldValue <= 2002;
  }
  if (fieldName === 'iyr') {
      return fieldValue >= 2010 && fieldValue <= 2020;
  }
  if (fieldName === 'eyr') {
    return fieldValue >= 2020 && fieldValue <= 2030;
  }
  if (fieldName === 'hgt') {
    const value = parseInt(fieldValue.substring(0, fieldValue.length-2), 10);
    const unit = fieldValue.substring(fieldValue.length-2);
    return (unit === 'cm' && value >= 150 && value <= 193) || (unit === 'in' && value >= 59 && value <= 76);
  }
  if (fieldName === 'hcl') {
    return fieldValue.match(/#[0-9a-f]{6}/g) && fieldValue.length === 7;
  }
  if (fieldName === 'ecl') {
    return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(fieldValue);
  }
  if (fieldName === 'pid') {
    return fieldValue.match(/[0-9]{9}/g) && fieldValue.length === 9;
  }
  return true;
};

const isStrictlyValidPassport = (passport) => {
  return passport.split(/\s+/).every(isValidField);
};

const countOfValidPassportsA = (passports) => {
  return passports.filter(isValidPassport).length;
};

const countOfValidPassportsB = (passports) => {
  return passports.filter(isValidPassport).filter(isStrictlyValidPassport).length;
};

const a = () => {
  console.log(countOfValidPassportsA(betterInput));
};

const b = () => {
  console.log(countOfValidPassportsB(betterInput));
};

a();
b();
