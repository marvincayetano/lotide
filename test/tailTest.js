const tail = require('../tail.js');

const assertEqual = function(actual, expected) {
    return `Assertion ${JSON.stringify(actual) === JSON.stringify(expected) ? "Passed" : "Failed"}: ${actual} ${JSON.stringify(actual) === JSON.stringify(expected) ? "=" : "!" }== ${expected} 😇`;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result.length, 2)); // ensure we get back two elements
console.log(assertEqual(result[0], "Lighthouse")); // ensure first element is "Lighthouse"
console.log(assertEqual(result[1], "Labs")); // ensure second element is "Labs"

console.log(assertEqual(result, ["Lighthouse", "Labs"])); // => will always fail!