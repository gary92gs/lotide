const assertEqual = (actual,expected) => {
  ((actual === expected) ? console.log(`👍 Assertion Passed: ${actual} === ${expected}`) : console.log(`👎 Assertion Failed: ${actual} !== ${expected}`));
};

const countLetters = (sentence) => {
  const letterOccurances = {};
  for (const char of sentence.replaceAll(' ')) {
    if (letterOccurances[char]){
      letterOccurances[char] += 1;
    } else {
      letterOccurances[char] = 1;
    }
  }
  return letterOccurances;
}

sentence1 = 'Garrett is so great';

const result = countLetters(sentence1);
 
assertEqual(result['G'], 1);
assertEqual(result['g'], 1);
assertEqual(result['a'], 2);
assertEqual(result['r'], 3);
assertEqual(result['e'], 2);
assertEqual(result['t'], 3);
assertEqual(result['i'], 1);
assertEqual(result['s'], 1);
assertEqual(result['o'], 1);


