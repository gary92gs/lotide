const assert = require('chai').assert; //don't forget the .assert!!!!
const middle = require('../middle');
//const assertArraysEqual = require('../assertArraysEqual');


describe('Testing middle.js', () => {
  it('should return [] for the array [1]', () => {
    assert.deepEqual(middle([1]),[]);
  });
  it('should return [2,3] if passed [1,2,3,4]', () => {
    assert.deepEqual(middle([1,2,3,4]),[2,3]);
  });
  it('should return [] if passed [0,1]', () => {
    assert.deepEqual(middle([0,1])[0]);
  });
  it('should return [3,4] if passed [1,2,3,4,5,6]', () => {
    assert.deepEqual(middle([1,2,3,4,5,6]),[3,4]);
  })
  it('should return [5] if passed [1,2,3,4,5,6,7,8,9]', () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7,8,9]),[5]);
  });
});
