//Write a function that returns a Promise and use await to wait for the resolution of that Promise.
function promise()
{
    return new Promise((res,rej)=>{
        setTimeout(() => {
          res("sanjit");
        }, 30000);
    })
}
const pr1=promise();
async function execute()
{
    const  massage=await pr1;
    console.log(massage);

}
execute();