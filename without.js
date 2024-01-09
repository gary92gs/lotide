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

const without = (sourceArr,itemsToRemove) => {
  newArr = [];
  for (const word of sourceArr) {
    if (!itemsToRemove.includes(word)){
      newArr.push(word);
    }
  }
  return newArr;
}


const words = ["hello", "world", "lighthouse"];
const ogWords = words;
console.log('without returns: ', without(words, ["lighthouse",'world','hello'])); 
assertArrayEquals(words,ogWords);