/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase().trim().replace(/[^a-zA-Z0-9]/g, "");

  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    const char = str[i];
    reversedStr += char;
  }

  if (reversedStr !== str) {
    return false;
  }

  return true;

  // 1. str ko lowercase kro, trim kro
  // 2. str main hr char ko replace kro except letters & numbers 
  // 3. str pr loop chalao 
  // 4. phr end se start tk characters reverse mein save kro 
  // 5. check kro agr reversedStr aur str same hai to true return krdo
  // 6. wrna false
}

module.exports = isPalindrome;
