/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelsCount = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (vowels.includes(char)) vowelsCount++;
  }

  return vowelsCount;

  // eik array main vowels save kro
  // str pr loop chalao aur hr character ko lower case kro
  // check kro agr char vowelsArr mein hai so vowelsCount +1 krdo
  // return vowelsCount
}
module.exports = countVowels;