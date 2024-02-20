//Implement a function fetchData(urls) that takes an array of URLs as input and fetches data from each URL using fetch API. Return a Promise that resolves with an array of fetched data.
const urls=['www/google','www/amazon','www/flipkart'];
function fetchData(urls)
{
   const promises=urls.map((url)=>{
      return new Promise((res,rej)=>{
          setTimeout(()=>{
             rej('suceess');
          },1000);
      });
   });
   return Promise.all(promises);
}
 const pr1=fetchData(urls);
 pr1.then((result)=>{
    console.log(result);
 }).catch((error)=>{
    console.log('all are not resolved');
 });


