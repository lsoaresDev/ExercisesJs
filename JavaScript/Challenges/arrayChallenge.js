/* Problem: Create a function named ArrayChallenge (Javascript) or 
 array_challenge (ruby) which accepts a single argument "arr" which is an array 
 of numbers. This function will return the string true if any two numbers can be 
 multiplied so that the answer is greater than double the sum of all the elements 
 in the array. If not, return the string false.

 For example: if the argument "arr" is [2, 5, 6, -6, 16, 2, 3, 6, 5, 3] then the sum 
 of all these elements is 42, and doubling it is 84. There are two elements in "arr", 
 16 * 6 = 96 where 96 is greater than 84, so your program should return the string true. 
 An example of an "arr" which should return false is [1, 2, 4] since double its sum (14) is 
 larger than multiplying its two largest elements (4 * 2 = 8).


assumptions:
  array will only contain Number object
  return string will change in the future
  cannot use any testing libraries like Jest or Mocha
  it is cleaner and faster to calculate total before and later
    exit multiplication calculation when its greater than totalSum */

 

function SumMultiplier(arr) {
  let result = []
  const sum = arr.reduce((a, b) => a + b)
  const multiplier = 2
  const totalSumMultiplier = sum * multiplier
  const notGreaterThanResult = 'true'
  const greaterThanResult= 'false' 
     
      
    for (let index in arr) {
      for (let secondIndex in arr){
        result = arr[index] * arr[secondIndex]
        if(result > totalSumMultiplier){
          return console.log(notGreaterThanResult)
        }
      }
    } 
  return console.log(greaterThanResult)
}
SumMultiplier([1, 1, 2, 2, 4, 1])
SumMultiplier([1, 1, 2, 10, 3, 1, 12])
 
    // true = 2 * (soma dos elementos) for menor que a multiplicação dos dois maiores números
    // [2, 2, 2, 2, 4, 1] false
    // [1, 1, 2, 10, 3, 1, 12] true
