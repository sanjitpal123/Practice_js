//Create an object circle with a property radius. Write a function calculateArea that computes and returns the area of a circle (pi * radius^2). Use bind() to create a new function area that calculates the area of the circle.
const circle={
    radius:7
}
function calculateArea()
{
    return Math.PI*Math.pow(this.radius,2);
}
const pr=calculateArea.bind(circle);
console.log(pr());