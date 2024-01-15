const middle = (arr1) => {
  let midIndex = Math.ceil(arr1.length/2) - 1;
  if (arr1.length > 2) {
    if (arr1.length % 2 === 0) {
      return arr1.slice(midIndex,midIndex + 2) 
    } else {
      return [arr1[midIndex]];
    }
  }
  return [];
}

module.exports = middle;


