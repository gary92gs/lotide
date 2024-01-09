const assertEqual = (actual, expected) => {
  ((actual === expected) ? console.log(`👍 Assertion Passed: ${actual} === ${expected}`) : console.log(`👎 Assertion Failed: ${actual} !== ${expected}`));
};

const tail = (array) => {
  return array.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(words);
for (let i = 0; i < result.length; i++) {
  assertEqual(words[i+1], result[i]);
}


