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

const takeUntil = function(array, callback) {
  const result = [];
  for(let value of array) {
    if(!callback(value)) {
      result.push(value);
    } else {
      return result;
    }
  };
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);
console.log(results2);