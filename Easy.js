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