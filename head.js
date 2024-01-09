const assertEqual = (actual, expected) => {
  ((actual === expected) ? console.log(`👍 Assertion Passed: ${actual} === ${expected}`) : console.log(`👎 Assertion Failed: ${actual} !== ${expected}`));
};

const head = (array) => {
  return array[0];
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(['forty-nine', 'fifty', 'fifty-one', 'fifty-two']), 'fifty');
assertEqual(head([6]), 5);
assertEqual(head([]), 1);
