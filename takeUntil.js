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

const takeUntil = (array, callback) => {
  for (const i in array) {
    if (callback(array[i])){
      return array.slice(0,i); 
    }
  }
  return array;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

assertArrayEquals(results1,[ 1, 2, 5, 7, 2 ]);
assertArrayEquals(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);
