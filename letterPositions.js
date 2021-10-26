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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for(let i = 0; i < sentence.length; i++) {
    if(sentence[i] !== ' ') {
      if(results.hasOwnProperty(sentence[i])) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }

  return results;
};

console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("lighthouse in the house")["l"], [ 0 ]);
assertArraysEqual(letterPositions("lighthouse in the house")["i"], [ 1, 11 ]);