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

function middle(arr) {
  // Check if odd or even
  if(!arr.length) return [];

  let location = Math.round(arr.length / 2);
  if(arr.length % 2 === 0) {
    // This is even
    return [arr[location - 1], arr[location]];
  } else {
    // This is odd
    return [arr[location - 1]];
  }
}

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);