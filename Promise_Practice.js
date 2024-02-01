//Write a promise that resolves successfully and use .then() to handle the success. Then, introduce an error using throw and handle it with .catch().
const promise=new Promise((res,rej)=> res(45));

promise.then((value)=>{
    console.log("Promise one is successfull with",value);

});
const promise2=new Promise((res,rej)=> rej(6));
promise2.then((value)=>{
    console.log("successfull with ",value);

},(value)=>{
    throw value;

}).catch((error)=>{
    console.log("Error is :" , error);

});

