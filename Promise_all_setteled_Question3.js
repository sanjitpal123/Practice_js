//Write a function that accepts an array of promises and a delay value. Use Promise.allSettled to wait for all promises to settle and return an array with the results, including any delayed values resolved after the specified delay.
function promise1()
{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(10); 
        },1000);
      
    });
}

function promise2()
{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            rej(2929);
        },2000);
    })
}
async function  execute(arr)
{
    let arrofresult=[];
    try{
        const results=await Promise.allSettled(arr.map((arr)=>arr()));
         results.forEach((result,index)=>{
            if(result.status==="fulfilled")
            {
             arrofresult.push(`promse ${index+1} is fullfilled with: ${result.value}`);
            }
            else{
                arrofresult.push(`promse ${index+1} is rejected  with: ${result.reason}`);
            }
         })
        } catch(error)
        {
            console.log(error);
        }
        return arrofresult;
}
const pr1=execute([promise1,promise2]);
pr1.then((result)=>{
    console.log(result);
},(result)=>{
    console.log(result);
});
