const assertEqual = (actual, expected) => {
  ((actual === expected) ? console.log(`👍 Assertion Passed: ${actual} === ${expected}`) : console.log(`👎 Assertion Failed: ${actual} !== ${expected}`));
};

const tail = (array) => {
  return array.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
const wordsLength = words.length; // stores original length of words array (to ensure tail is not changing it)
const result = tail(words);
assertEqual(wordsLength, words.length); //checks that the length of the words array is unchanged after calling tail() [even though the for loop will not work otherwise - see below]
for (let i = 0; i < result.length; i++) {
  assertEqual(words[i + 1], result[i]); //see here: words[i+1] vs result[i]
}

module.exports = tail;


