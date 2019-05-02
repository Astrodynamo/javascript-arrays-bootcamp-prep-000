var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]



function addElementToBeginningOfArray() {
  ['twix', ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray() {
  chocolateBars.unshift('twix');
}

function addElementToEndOfArray() {
  [...chocolateBars, 'twix'];
}

function destructivelyAddElementToEndOfArray() {
  chocolateBars.push('twix');
}

