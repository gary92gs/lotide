# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @gary92.gs/lotide`

**Require it:**

`const _ = require('@gary92.gs/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the 0th element of an array.
* `tail(array)`: returns array element 1-n of an array. Excludes 1st element.
* `middle(array)`: returns the middle element(s) of an array. If number of elements is odd, returns 1 element, if number of elements is even, returns 2 elements.
* `countLetters(string)`: counts each occurence of each character in a string, and returns an object where the keys are the characters found, and the values are the number of instances of that character in the string that was passed in.
* `countOnly(array,object)`: receives an array of strings and an object with properties containing boolean values. Uses the object containing boolean values to determine which strings/elements in the array should be counted. Counted strings are returned as an object, where the key is the string, and the value is the number of occurences of that string.
* `findKey(object,callback)`: receives an object and a callback function. It scans the object and checks for the first property that matches criteria provided by the callback function. Returns the first property name that has a value that meets the criteria.
* `findKeyByValue(object,value)`: receives an object and a primitive value. scans object for a property value that matches the primitive value that was passed in. Once it finds a matching value, it returns the property name/object key.
* `flatten(array)`: receives an array and returns a copy of that array that is flattened. It can turn a 2D array into a 1D array. It cannot flatten arrays nested past 2D (ie. 3D and beyond)
* `letterPositions(string)`: receives an string and returns an object where each property contains an array of index locations. The property is a character in the alphabet, and the property value is an array of index locations that the character was found.
* `map(array,callback)`: receives an array and a callback function. Returns an array where each element was operated on by the callback function. very similar to Array.map().
* `takeUntil(array,callback)`: receives an array and a callback function. Returns a copy of the array, from the 0th element up until the element where it finds a value that meets the criteria provided by the callback function.
* `without(array1,array2)`: receives 2 arrays. returns a copy of array1 minus the elements in array2. 
* `assertArraysEqual(array1, array2)`: receives 2 arrays and asserts whether or not they are equal.
* `assertEqual(value1,value2)`: receives 2 primitive values and asserts whether or not they are equal.
* `assertObjectsEqual(object1,object2)`: receives 2 objects and asserts whether or not they are equal.
* `eqArrays(array1,array2)`: receives 2 arrays and checks if each element contains equal values and if both arrays are the same length.
* `eqObjects(object1,object2)`: receives 2 objects and checks if each element contains equal values and if both objects are the same length.