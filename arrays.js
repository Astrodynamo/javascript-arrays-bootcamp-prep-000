var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

var moreChocolate = 'twix';

function addElementToBeginningOfArray(chocolateBars, moreChocolate) {
  [moreChocolate, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, moreChocolate) {
  chocolateBars.unshift(moreChocolate);
}

function addElementToEndOfArray(chocolateBars, moreChocolate) {
  [...chocolateBars, moreChocolate];
}

function destructivelyAddElementToEndOfArray(chocolateBars, moreChocolate) {
  chocolateBars.push(moreChocolate);
}

