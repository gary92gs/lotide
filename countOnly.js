const assertEqual = (actual,expected) => {
  ((actual === expected) ? console.log(`👍 Assertion Passed: ${actual} === ${expected}`) : console.log(`👎 Assertion Failed: ${actual} !== ${expected}`));
};

const countOnly = (array,object) => {
  const objKeyCounts = {};
  for (const key in object) {
    if (object[key]) {  //if key/value is truthy
      let keyCount = 0;
      for (element of array) {
        if (key === element) {
          keyCount++;
        }
      }
      if (keyCount > 0) {
        objKeyCounts[key] = keyCount;
      }
    }
  }
  return objKeyCounts;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { 
  "Jason": true, 
  "Karima": true, 
  "Fang": true, 
  "Agouhanna": false });



assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
