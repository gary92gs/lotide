// const assertEqual = require('../assertEqual.js');
// const head = require('../head.js');

const assert = require('chai').assert; //import assertion library
const head = require('../head'); //insert file to test against

describe('Tests for head.js', () => {
  it('should return 1 for the array [1,2,3]', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it('should return "5" for ["5"]', () => {
    assert.strictEqual(head([5]),'5');
  })
});
