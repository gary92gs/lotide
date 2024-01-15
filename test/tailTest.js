const assert = require('chai').assert;
const tail = require('../tail.js')


describe('Testing tailjs', () => {
  it('should return ["Lighthouse","Labs"] if passed ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]),["Lighthouse","Labs"]);
  });
  it('should return "ighthouse" if passes "Lighthouse"', () => {
    assert.deepEqual(tail("Lighthouse"),"ighthouse");
  });
});

