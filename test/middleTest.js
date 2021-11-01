const middle = require('../middle');
const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("#middle", () => {
  it("returns true for [1, 2, 3], [2]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns true for [1, 2, 3, 4, 5], [3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns true for [1, 2, 3, 4], [2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns true for [1, 2, 3, 4, 5, 6], [3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});