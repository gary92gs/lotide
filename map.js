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

const map = (array,callback) => {
  const results = [];
  for (const element of array) {
    results.push(callback(element));
  }
  return results;
}


const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["talk","to","me","goose"];
const words3 = ["say","hello","to","my","little","friend"];
const results = map(words, word => word[0]);
const results2 = map(words2, word => word[0]);
const results3 = map(words3, word => word[0]);

assertArrayEquals(results,['g','c','t','m','t']);
assertArrayEquals(results2,['t','t','m','g']);
assertArrayEquals(results3,['s','h','t','m','l','f']);
