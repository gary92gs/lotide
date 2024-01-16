const map = (array,callback) => {
  const results = [];
  for (const element of array) {
    results.push(callback(element));
  }
  return results;
}

module.exports = map;


//TEST CASES BELOW:
// const words = ["ground", "control", "to", "major", "tom"];
// const words2 = ["talk","to","me","goose"];
// const words3 = ["say","hello","to","my","little","friend"];
// const results = map(words, word => word[0]);
// const results2 = map(words2, word => word[0]);
// const results3 = map(words3, word => word[0]);

// assertArrayEquals(results,['g','c','t','m','t']);
// assertArrayEquals(results2,['t','t','m','g']);
// assertArrayEquals(results3,['s','h','t','m','l','f']);
