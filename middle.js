const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArrayEquals = (arr1,arr2) => {
  ((eqArrays(arr1,arr2)) ? console.log(`👍 Assertion Passed: ${arr1} === ${arr2}`) : console.log(`👎 Assertion Failed: ${arr1} !== ${arr2}`));
};

const middle = (arr1) => {
  let midIndex = Math.ceil(arr1.length/2) - 1;
  if (arr1.length > 2) {
    if (arr1.length % 2 === 0) {
      return arr1.slice(midIndex,midIndex + 2) 
    } else {
      return [arr1[midIndex]];
    }
  }
  return [];
}

let testArr1 = [1]
let testArr2 = [1,2,3,4]
let testArr3 = [0,1]
let testArr4 = [1,2,3,4,5,6]
let testArr5 = [1,2,3,4,5,6,7,8,9]

assertArrayEquals(middle(testArr1),[]);
assertArrayEquals(middle(testArr2),[2,3]);
assertArrayEquals(middle(testArr3),[]);
assertArrayEquals(middle(testArr4),[3,4]);
assertArrayEquals(middle(testArr5),[5]);
