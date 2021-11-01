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

module.exports = assertArraysEqual;