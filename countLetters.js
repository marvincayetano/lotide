const assertEqual = function(actual, expected) {
  return `Assertion ${actual === expected ? "Passed" : "Failed"}: ${actual} ${actual === expected ? "=" : "!" }== ${expected} 😇`;
};

function countLetters(letters) {
  let resultObject = {};

  for(let letter of letters) {
    if(resultObject.hasOwnProperty(letter)) {
      resultObject[letter] += 1;
    } else {
      resultObject[letter] = 1;
    }
  }

  return resultObject;
}