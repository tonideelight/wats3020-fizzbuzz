/* Code for WATS 3020 FizzBuzz Assignment */

let isInteger,
    maxNumber,
    fbResults,
    fbText;

// Get maxNumber from user and validate, default 30
isInteger = false;
while (isInteger == false) {
  maxNumber = prompt('Enter a whole number greater than 0.', 30);
  maxNumber = parseInt(maxNumber);
  if (Number.isSafeInteger(maxNumber) && maxNumber > 0) {
    isInteger = true;
  }
}

// Count from one to maxNumber, but 
// when a number is divisible by 3 & 5 say Fizzbuzz
// when a number is divisible by 5 say Buzz
// when a number is divisible by 3 say Fizz 
fbResults = [];
for (var i = 1; i <= maxNumber; i++) {
 if (i % 15 == 0) {
     fbResults.push('FizzBuzz')
 }
 else if (i % 5 ==0) {
      fbResults.push('Buzz')
  }
  else if (i % 3 == 0) {
    fbResults.push('Fizz')
  }
  else {
      fbResults.push(i)
  }
}

// iterate over fbResults
// concatenate values to fbText
fbText = '';
for (let value of fbResults) {
    fbText += value + '\n';
}

///////////////////////////////////////////////////////////////////////
// Do not edit below this line unless you are doing something fancy!
//////////////////////////////////////////////////////////////////////
let numDisplay = document.querySelector("#max-number");
numDisplay.innerHTML = maxNumber;
let output = document.querySelector("#output");
output.innerHTML = fbText;
