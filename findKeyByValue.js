const assertEqual = function(actual, expected) {
  return `Assertion ${actual === expected ? "Passed" : "Failed"}: ${actual} ${actual === expected ? "=" : "!" }== ${expected} 😇`;
};

function findKeyByValue(objectVar, stringValue) {
  for(let x in objectVar) {
    if(objectVar[x] === stringValue) return x;
  }
}

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")
);

console.log(
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)
);