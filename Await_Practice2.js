//Implement an asynchronous function that fetches data from an API using await, and handle errors using a try-catch block.
function fetchData()
{
    return new Promise((res,rej)=>{
        
        setTimeout(()=>{
            rej(new Error("sanjit"));
        },300);
    });
}
async function execute()
{
    
     try{
        const fetchdataapi= await fetchData();
     } catch(error)
     {
        console.error("Error:",error.message);
     }
}
execute();

