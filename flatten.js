const flatten = (array) => {
  let flatArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        flatArray.push(array[i][j]);
      }
    } else {
      flatArray.push(array[i]);
    }
  }
  return flatArray;
}

module.exports = flatten;


//TEST CASE BELOW:
// console.log(flatten([1, 2, [3, 4, 5], [6, 7], 8, [], 9, 10]));