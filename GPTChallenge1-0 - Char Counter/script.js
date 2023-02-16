// Sure, here's a coding challenge for you in JavaScript:

//Write a function that takes in a string as input and returns an object containing the count of each character in the string. The object should have keys that correspond to the characters in the input string, and the values should be the number of times that character appears in the string.

//For example, if the input string is "hello world", the output should be:

//{
//"h": 1,
//"e": 1,
//"l": 3,
//"o": 2,
//"w": 1,
//"r": 1,
//"d": 1
//}

var str= "Hello world";

function arrayRemove(arr, value1, value2) { 
  return arr.filter( item => { 
      return item != value1; 
  });
}

function countLetters (stringvar) {
  const seen = {};
  const countChar = {};

  let strToArray= Array.from(stringvar);
  strToArray = arrayRemove(strToArray, ' ');

  for(let i = 0; i <strToArray.length ; i++){
    if((seen[strToArray[i]] > 0 && seen[strToArray[i]] < 2)){
      countChar[strToArray[i]]++;
    } else {
      countChar[strToArray[i]] = 1;
    }
    seen[strToArray[i]] = 1;
  }
  return countChar;
}
  










