const findKeyByValue = (object,value) => {
  for(const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
}

module.exports = findKeyByValue;








//TEST CASES BELOW:
// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
