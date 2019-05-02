var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

var moreChocolate = 'twix';

function addElementToBeginningOfArray(chocolateBars, moreChocolate) {
  return [moreChocolate, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, moreChocolate) {
  chocolateBars.unshift(moreChocolate);
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, moreChocolate) {
  return [...chocolateBars, moreChocolate];
}

function destructivelyAddElementToEndOfArray(chocolateBars, moreChocolate) {
  chocolateBars.push(moreChocolate);
  return chocolateBars;
}

function accessElementInArray(chocolateBars, index) {
  return chocolateBars[0];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.slice(1);
  return chocolateBars;
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars) {
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray(chocolateBars) {
  return chocolateBars.slice(0, chocolateBars.length - 1);
}

