Have the function StringChallenge(num) take the num parameter being passed and return all the numbers from 1 to num separated by spaces, but replace every number that is divisible by 3 with the word "Fizz", replace every number that is divisible by 5 with the word "Buzz", and every number that is divisible by both 3 and 5 with the word "FizzBuzz". For example: if num is 16, then your program should return the string "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16". The input will be within the range 1 - 50.


function StringChallenge(num) { 

  let str = new String("");
  for(let x = 1; x <= num; x++) {
    if(x % 3 === 0 && x % 5 === 0) {
      str += " Fizz Buzz "
    } else if(x % 3 === 0) {
      str += " Fizz ";
    } else if (x % 5 === 0) {
      str += " Buzz ";
    } else {
      str += x + " ";
    };
  }
  // code goes here  
  return str.trim(); 

}
   
// keep this function call here 
console.log(StringChallenge(readline()));
