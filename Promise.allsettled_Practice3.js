//Consider a situation where you have multiple promises representing different tasks, but you're only interested in the result of the first resolved promise. How would you use Promise.race() to handle this scenario?

function promise1()
{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
          res('promise1 ');
        },2000);
    })
}
function promise2()
{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            rej('promise2 is rejected');
        },3000);
    });
}

const result=Promise.race([promise1(),promise2()]);

result.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})

