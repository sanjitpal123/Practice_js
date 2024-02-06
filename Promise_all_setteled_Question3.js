
function promise1()
{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("success");
        },1000);
    });
}
function promise2()
{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(5);
        },2000);
    });
}
function promise3()
{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            rej("rejected");
        },3000);
    });
}

async function Execute(arroftask){
   try{
    const results=await Promise.allSettled(arroftask.map(task=>task()));
    results.forEach((result,index)=>{
         if(result.status==="fulfilled")
         {
            console.log(`Promse ${index+1}: is fullfill with value:${result.value}`);
         }
         else{
         console.log(`Promse ${index+1}: is rejected with value:${result.reason}`);
         }
    })
   }catch(error)
   {
    console.log(error);
   }
}
Execute([promise1,promise2,promise3]);