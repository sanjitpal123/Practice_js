//Write code to create a promise that resolves after a certain time period, and then console log a success message when it resolves.
const pr=new Promise((res,rej)=>{
    setTimeout(()=>{
         res("success");
    },1000)
})
pr.then((result)=>{
    console.log(result);
},(result)=>{
 console.log(result);
})