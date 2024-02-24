//Define a function divideByTwo that takes a number x as a parameter and returns x divided by 2. Use bind() to create a new function halve that always halves a number passed to it.  
function divideByTwo(x)
{
   return x%2;
}
const divide=divideByTwo.bind(null);
console.log(divide(9));
