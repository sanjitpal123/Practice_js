//Create a sequence of promises using .then() that performs a series of asynchronous tasks (e.g., fetching data from an API, processing it, and then saving it). Implement error handling using .catch() to log any errors that occur during the process.
function fetchdata(url)
{
    console.log("Start fetching data from url",url);
    return new Promise((res,rej)=>{
          setTimeout(()=>{
            if(url)
            {
                res('xyz');
            }
            else{
                rej('Data could not found');
            }
          },1000)
    })
}
function processdata(data)
{
    console.log("Data is started processing");
    return new Promise((res,rej)=>{
        if(Math.random()<0.5){
            rej("Process is incompleted");
        }
        else{
            res(data);
        }
    },3000);
}
function savedata(data)
{
    console.log("started saving data");
    return new Promise((res,rej)=>{
      setTimeout(()=>{
        if(Math.random()<0.4)
        {
            rej("could not save");
        }
        else{
            res('Data is saved successfully');
        }
      },2000)
    })
}


const pr1=fetchdata('xyzfdjjf');
pr1.then((result)=>{
    console.log('data is fetched successfully',result);
    return processdata(result);
})
.then((result)=>{
    console.log('data is processed with ',result);
    return savedata(result);
}).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log('Error:',error);
});