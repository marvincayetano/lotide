function middle(arr) {
  // Check if odd or even
  if(!arr.length) return [];

  let location = Math.round(arr.length / 2);
  if(arr.length % 2 === 0) {
    // This is even
    return [arr[location - 1], arr[location]];
  } else {
    // This is odd
    return [arr[location - 1]];
  }
}

module.exports = middle;