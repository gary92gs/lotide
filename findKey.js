const findKey = (object,callback) => {
  for (const item in object) {
    if (callback(object[item])){
      return item;
    }
  }
  return undefined;
}

module.exports = findKey;

//TEST CASES BELOW:

// const ratings = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }

// const result1 = findKey(ratings, x => x.stars === 2);
// const result2 = findKey(ratings, item => item.stars === 4);
// const result3 = findKey(ratings, item => item.stars === 3);

// assertEqual(result1,'noma');
// assertEqual(result2, undefined);
// assertEqual(result3,'Akaleri');
