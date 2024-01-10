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

const assertArrayEquals = (arr1, arr2) => {
  ((eqArrays(arr1, arr2)) ? console.log(`👍 Assertion Passed: ${arr1} === ${arr2}`) : console.log(`👎 Assertion Failed: ${arr1} !== ${arr2}`));
};


const letterPositions = (sentence) => {
  const indexObject = {};
  for (const index in sentence) {
    if (indexObject[sentence[index]]) { //if truthy (if character present in object as key)
      indexObject[sentence[index]].push(Number(index));
    } else {
      indexObject[sentence[index]] = [Number(index)];
    }
  }
  delete indexObject[' '];
  return indexObject;
}

const string = 'lighthouse in the house';

const result = letterPositions(string);

assertArrayEquals(result.l, [0]);
assertArrayEquals(result.i, [1, 11]);
assertArrayEquals(result.g, [2]);
assertArrayEquals(result.h, [3, 5, 15, 18]);
assertArrayEquals(result.t, [4, 14]);
assertArrayEquals(result.o, [6, 19]);
assertArrayEquals(result.u, [7, 20]);
assertArrayEquals(result.s, [8, 21]);
assertArrayEquals(result.e, [9, 16, 22]);
assertArrayEquals(result.n, [12]);