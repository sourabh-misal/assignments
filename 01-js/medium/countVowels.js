/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
 // const cleanStr1 = str.replace(/\s/g, '').toLowerCase();
   let arr = str.split('').join();
   let n = 0;
   for(let i =0; i<arr.length; i++){

    if(arr[i]=='a'||arr[i]=='e'||arr[i]=='i'||arr[i]=='o'||arr[i]=='u'||arr[i]=='A'||arr[i]=='E'
    ||arr[i]=='I'||arr[i]=='O'||arr[i]=='U'){
      n = n+1;
    }  
  }

  return n;
}

module.exports = countVowels;