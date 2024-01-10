const assertEqual = (actual,expected) => {
  ((actual === expected) ? console.log(`👍 Assertion Passed: ${actual} === ${expected}`) : console.log(`👎 Assertion Failed: ${actual} !== ${expected}`));
};

const countLetters = (sentence) => {
  const letterOccurances = {};
  for (char of sentence) {
    if (letterOccurances[char]){
      letterOccurances[char] += 1;
    } else {
      letterOccurances[char] = 1;
    }
  }
  return letterOccurances;
}

sentence1 = 'Garrett is so great!';

console.log(countLetters(sentence1));

