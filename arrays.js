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

function accessElementInArray() {
  
}