function eqArrays(arrOne, arrTwo) {
  if(arrOne.length === arrTwo.length) {
    for(let i = 0; i < arrOne.length; i++) {
      if(arrOne[i] !== arrTwo[i]) return false;
    }

    return true;
  }

  return false;
}

const eqObjects = function(object1, object2) {
  for(let x in object1) {
    if(!object2.hasOwnProperty(x)) {
      return false;

    } else if(Array.isArray(object1[x])) {
      return eqArrays(object1[x], object2[x]);

    } else if(object1[x] !== object2[x]) {
      return false;
    }
  }

  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  const boolResult = eqObjects(actual, expected);

  return `Assertion ${boolResult ? "👍 Passed" : "❌ Failed"}: ${inspect(actual)} ${boolResult ? "=" : "!" }== ${inspect(expected)}`;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(eqObjects(ab, ba), true)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(eqObjects(ab, abc), false)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(eqObjects(cd, dc), true)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(eqObjects(cd, cd2), false)); // => false