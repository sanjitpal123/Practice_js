const promise1=new Promise((res,rej)=>{
    setTimeout(()=>{
        res('sucess1');
    },7000);
})

const promise2=new Promise((res,rej)=>{
    setTimeout(()=>{
        res('sucess2');
    },2000);
})
const promise3=new Promise((res,rej)=>{
    setTimeout(()=>{
        res('sucess3');
    },1000);
});
 const pr1=Promise.race([promise1,promise2,promise3]);
pr1.then((result)=>{
   console.log(result);
}).catch((error)=>{
    console.error(error.message);
})