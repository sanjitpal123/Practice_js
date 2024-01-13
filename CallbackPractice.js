//Create a function that takes an array and a mapping callback, and returns a new array with each element transformed by the callback.
const arr=[3,4,5];
const a=function fun(arr,fn)
{
  let ar=[];
  for(let i=0;i<arr.length;i++)
  {
    ar.push(fn(arr[i]));
  }
  return ar;
}
console.log(a(arr,(e)=>e*e));