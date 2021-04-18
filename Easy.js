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