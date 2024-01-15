const assertEqual = require('../assertEqual.js');
const head = require('../head.js');

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(['forty-nine', 'fifty', 'fifty-one', 'fifty-two']), 'fifty');
assertEqual(head([6]), 5);
assertEqual(head([]), 1);