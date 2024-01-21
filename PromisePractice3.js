//Create a promise that rejects with an error message after 1 second.
const promise=new Promise((res,rej)=>{
  setTimeout(()=>{
     rej("rejected");
  },1000);
});

promise.then( function onfullfillment(result){
  console.log(result);
},function onrejected(result){
  console.log(result);
})