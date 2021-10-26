const assertEqual = function(boolAssert) {
  console.log(`Assertion ${boolAssert ? "Passed" : "Failed"} 😇`);
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
  return;
};

function without(arrOne, arrTwo) {
  let arrResult = [...arrOne];

  for(let i = 0; i < arrResult.length; i++) {
    for(let j = 0; j < arrTwo.length; j++) {
      if(arrResult[i] === arrTwo[j]) arrResult.splice(i, 1);
    }
  }

  console.log(arrResult);
}

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
assertArraysEqual(words, ["hello", "world", "lighthouse"]);