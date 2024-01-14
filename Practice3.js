//Create a function expression that accepts two parameters, a base number, and an exponent, and returns the result of raising the base to the exponent.
const powercal=function exponent(x,y)
{
  let c=1;
  for(let i=1;i<=y;i++)
  {
    c=c*x;
  }
  return c;
}
console.log(powercal(2,3));