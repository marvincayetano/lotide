// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  return `Assertion ${actual === expected ? "Passed" : "Failed"}: ${actual} ${actual === expected ? "=" : "!" }== ${expected} 😇`;
};

module.exports = assertEqual;