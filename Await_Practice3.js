//Implement an asynchronous function that takes a parameter delay and resolves a promise after the specified delay using setTimeout with await
function Promisecreat(delay)
{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Succees ");
        },delay);
    });
}
async function execute()
{
    try{
    const p1= await Promisecreat(1000);
    console.log(p1);
    }
    catch(error)
    {
        console.log(error);
    }

}
execute();