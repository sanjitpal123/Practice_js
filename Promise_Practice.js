const promise1=new Promise((res,rej)=>res(10));
const promise2=new Promise((res,rej)=>res(20));
const promise3=new Promise ((res,rej)=>rej(30));
Promise.all([promise1, promise2, promise3]).then((value)=>{
    console.log("promise is fullfilled with :",value);
},(value)=>{
    throw value;
}).catch((error)=>{
    console.log("Error is:",error);
})
