// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    return `Assertion ${actual === expected ? "Passed" : "Failed"}: ${actual} ${actual === expected ? "=" : "!" }== ${expected} 😇`;
  };

  // TEST CODE
  console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
  console.log(assertEqual(1, 1));