const assertObjectsEqual = (actual,expected) => {
  const inspect = require('util').inspect;
  ((eqObjects(actual,expected)) ? console.log(`👍 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`👎 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`));
};

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

const eqObjects = (object1,object2) => {
  if (Object.keys(object1).length !== Object.keys(object2).length){
    return false;
  }
  for (const key in object1) {
    if (object1[key] !== object2[key]) {
      //check if object properties are unequal because they are arrays, before returning false
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])){
        if (eqArrays(object1[key],object2[key])){
          continue;
        }
      }
      return false;
    }
  }
  return true;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

assertObjectsEqual(shirtObject,anotherShirtObject);//pass
assertObjectsEqual(shirtObject,longSleeveShirtObject);//fail
assertObjectsEqual(multiColorShirtObject,anotherMultiColorShirtObject);//pass
assertObjectsEqual(multiColorShirtObject,longSleeveMultiColorShirtObject);//fial
