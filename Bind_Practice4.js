//Write a function computeSquare that takes a number x as a parameter and returns its square. Use bind() to create a new function square that always computes the square of a number passed to it.
function computeSquare(x)
{
    return x*x;
}
const square=computeSquare.bind(null);
console.log(square(4));