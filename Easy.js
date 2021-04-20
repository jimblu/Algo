//Convert Celsius to Fahrenheit
function convertToF(celsius) {
  let fahrenheit = (celsius*(9/5)) + 32;
  return fahrenheit;
}

//Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}

//Factorialize a Number
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  let factNum = num
  for (let i = 1; i < num; i++) {
    factNum *= num - i;
  }
  return factNum;
}

//Find the Longest Word in a String
function findLongestWordLength(str) {
  let max = 0;
  let words = str.split(' ');
  words.forEach(word => max < word.length ? max = word.length : max)
  return max;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");

//Return Largest Numbers in Arrays
function largestOfFour(arr) {
  let Largest = [];
  let max;
  arr.map(subArray => {
    max = Math.max(...subArray)
    Largest.push(max)
  })
  return Largest
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

//Confirm the Ending
function confirmEnding(str, target) {                     /*OR*/  str.endsWith(target)
  let targetLength = target.length;
  let arr = str.split('');
  let check = arr.slice(arr.length - targetLength, arr.length).join('')
  return check === target ? true : false;
}
console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));

//Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {                 /*OR*/ str.repeat(num);
  if (num <= 0) {
    return '';
  }
  let arr = [str];
  for (let i = 1; i < num; i++) {
    arr.push(str)
  }
  let repeatStr = arr.join('');
  return repeatStr;
}
repeatStringNumTimes("abc", 3);