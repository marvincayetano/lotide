const head = function(arr) {
    if(arr.length) {
        return arr[0];
    }

    return undefined;
}

const assertEqual = function(actual, expected) {
    return `Assertion ${actual === expected ? "Passed" : "Failed"}: ${actual} ${actual === expected ? "=" : "!" }== ${expected} 😇`;
  };

console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));