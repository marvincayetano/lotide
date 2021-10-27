const assertEqual = function(boolAssert) {
  console.log(`Assertion ${boolAssert ? "Passed" : "Failed"}😇`);
};

function assertArraysEqual(arrOne, arrTwo) {
  if(arrOne.length === arrTwo.length) {
    for(let i = 0; i < arrOne.length; i++) {
      if(arrOne[i] !== arrTwo[i]) {
        assertEqual(false);
        return;
      };
    }

    assertEqual(true);
    return;
  }

  assertEqual(false);
};

function eqArrays(arrOne, arrTwo) {
  if(arrOne.length === arrTwo.length) {
    for(let i = 0; i < arrOne.length; i++) {
      if(arrOne[i] !== arrTwo[i]) return false;
    }

    return true;
  }

  return false;
}

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
const results2 = map(words, word => word[0] + word[word.length - 1]);
const results3 = map(words, word => word.split("").reverse().join(""));
const results4 = map(words, word => word + "ly");
assertEqual(eqArrays(results2, [ 'gd', 'cl', 'to', 'mr', 'tm' ]));
assertEqual(eqArrays(results3, [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]));
assertEqual(eqArrays(results4, [ 'groundly', 'controlly', 'toly', 'majorly', 'tomly' ]));