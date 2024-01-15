const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');


let testArr1 = [1]
let testArr2 = [1,2,3,4]
let testArr3 = [0,1]
let testArr4 = [1,2,3,4,5,6]
let testArr5 = [1,2,3,4,5,6,7,8,9]

assertArraysEqual(middle(testArr1),[]);
assertArraysEqual(middle(testArr2),[2,3]);
assertArraysEqual(middle(testArr3),[]);
assertArraysEqual(middle(testArr4),[3,4]);
assertArraysEqual(middle(testArr5),[5]);