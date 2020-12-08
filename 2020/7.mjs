import { readFileSync } from 'fs';

const rawInput = readFileSync('./input/7.txt');

const target = {
  id: 'shiny gold',
};

const isUniqueBag = (value, index, self) => {
  return self.indexOf(value) === index;
};

const parseBag = (rawBag) => {
  const splitted = rawBag.split(' bags contain ');
  return {
    id: splitted[0],
    children: splitted[1] === 'no other bags.' ? [] : splitted[1].split(', ').map((bag) => {
      const splittedBagString = bag.split(' ');
      return {
        count: parseInt(splittedBagString[0], 10),
        id: splittedBagString[1] + ' ' + splittedBagString[2],
      }
    }),
  };
};

const betterInput = rawInput.toLocaleString().split('\n').map(parseBag);

const getListOfParents = (childToLookFor) => {
  return betterInput.filter(bag => bag.children.some(child => child.id === childToLookFor.id));
};

const getRecursiveParents = (childToLookFor) => {
  const flat = [];
  getListOfParents(childToLookFor).forEach((parent) => {
    flat.push(parent);
    flat.push(...getRecursiveParents(parent))
  });
  
  return flat;
};

const findBag = (id) => {
  return betterInput.find((bag) => bag.id === id);
};

const getRecursiveChildrenCount = (parent) => {
  let count = 0;
  parent.children.forEach((child) => {
    count += child.count;
    count += child.count * getRecursiveChildrenCount(findBag(child.id));
  });
  
  return count;
};

const a = () => {
  const listOfParents = getRecursiveParents(target);
  console.log(listOfParents.filter(isUniqueBag).length);
};

const b = () => {
  console.log(getRecursiveChildrenCount(findBag(target.id)));
};

a();
b();
