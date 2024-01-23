//Create a Promise that intentionally rejects with an error message. Use catch to handle the rejection and log the error.
function createpromise()
{
  return new Promise((res,rej)=>{
    rej("rejected");
  });
}
const response=createpromise();
response.then(function onfullfillment(result){
  console.log(result);
}).catch(function onrejected(result){
  console.log(result);
})