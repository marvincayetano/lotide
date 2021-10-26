const assertEqual = function(actual, expected) {
  return `Assertion ${actual === expected ? "Passed" : "Failed"}: ${actual} ${actual === expected ? "=" : "!" }== ${expected} 😇`;
};

const countOnly = function(allItems, itemsToCount) {
  let returnObject = {};

  for(let item of allItems) {
    if(itemsToCount[item] === true) {
      if(returnObject.hasOwnProperty(item)) {
        returnObject[item] += 1;
      } else {
        returnObject[item] = 1;
      }
    }
  }

  return returnObject;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(
assertEqual(result1["Jason"], 1));
console.log(
assertEqual(result1["Karima"], undefined));
console.log(
assertEqual(result1["Fang"], 2));
console.log(
assertEqual(result1["Agouhanna"], undefined));