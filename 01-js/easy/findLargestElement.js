/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let maxNum = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (maxNum < numbers[i]) maxNum = numbers[i]
    }
    return maxNum;

    // pehle 0index value maxNum main save krdo
    // numbers array pr loop chalao from index 1
    // agr maxNum numbers[i] se chota hai, numbers[i] ko save krdo maxNum mein
    // return krdo maxNum
}

module.exports = findLargestElement;