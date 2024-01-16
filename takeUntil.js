const takeUntil = (array, callback) => {
  for (const i in array) {
    if (callback(array[i])){
      return array.slice(0,i); 
    }
  }
  return array;
}

module.exports = takeUntil;



//TEST CASES BELOW:
// //operations
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');

// //tests
// assertArrayEquals(results1,[ 1, 2, 5, 7, 2 ]);
// assertArrayEquals(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);
