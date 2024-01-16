const without = (sourceArr,itemsToRemove) => {
  newArr = [];
  for (const word of sourceArr) {
    if (!itemsToRemove.includes(word)){
      newArr.push(word);
    }
  }
  return newArr;
}

module.exports = without;






// //TEST CASES BELOW:
// const words = ["hello", "world", "lighthouse"];
// const ogWords = words.slice();//create separate copy (ie. different array memory address)
// console.log('without returns: ', without(words, ["lighthouse",'world','hello'])); 
// assertArrayEquals(words,ogWords);