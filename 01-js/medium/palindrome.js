/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let text = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  let n = text.length;

  for(let i=0;i<n/2;i++){
    if(text[i]!=text[n-1-i]){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
