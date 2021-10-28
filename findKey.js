const assertEqual = function(actual, expected) {
  return `Assertion ${actual === expected ? "Passed" : "Failed"}: ${actual} ${actual === expected ? "=" : "!" }== ${expected} 😇`;
};

function findKey(object, callback) {
  for(let value in object) {
    if(callback(object[value])) return value;
  }
}

const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

console.log(assertEqual(result, "noma"));
