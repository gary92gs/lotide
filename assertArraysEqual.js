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

assertArrayEquals([1, 2, 3], [1, 2, 3]); // => true
assertArrayEquals([1, 2, 3], [3, 2, 1]); // => false

assertArrayEquals(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArrayEquals(["1", "2", "3"], ["1", "2", 3]); // => false