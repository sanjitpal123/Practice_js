//Write a function multiply that multiplies two numbers and use the call method to invoke it with different arguments.

function multiply(x, y) {
   return x * y;
}

// Use call method to invoke multiply with different arguments

console.log(multiply.call(null,10,20));