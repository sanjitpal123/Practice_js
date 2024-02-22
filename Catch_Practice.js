//Write a function that returns a promise. Inside the promise, randomly throw an error with a 50% chance. Use .catch() to handle the error and log an error message to the console if the promise is rejected.
function promisecreate()
{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(Math.random()<0.5)
            {
                rej('Error occures');
            }
            else{
                res('success');
            }
          
        },2000);
    });
}
const pr1=promisecreate();
pr1.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})