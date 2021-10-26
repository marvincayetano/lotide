const assertEqual = function(actual, expected) {
  return `Assertion ${actual === expected ? "Passed" : "Failed"}: ${actual} ${actual === expected ? "=" : "!" }== ${expected} 😇`;
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertEqual(eqObjects(ab, ba), true)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual(eqObjects(ab, abc), false)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertEqual(eqObjects(cd, dc), true)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects(cd, cd2), false)); // => false