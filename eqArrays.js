function eqArrays(arrOne, arrTwo) {
  if(arrOne.length === arrTwo.length) {
    for(let i = 0; i < arrOne.length; i++) {
      if(arrOne[i] !== arrTwo[i]) return false;
    }

    return true;
  }

  return false;
}

module.exports = eqArrays;