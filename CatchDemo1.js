const promse= function createpromise()
{
    return new Promise((res,rej)=>{
        rej('sanjit');
    });
}
const pr1=promse();
pr1
.then(function onfullfillment(value){
    console.log("pr1 is fullfillment with",value);
},function ofrejected(value){
    console.log("Pr1 is rejected with",value);
    throw 33
})
.then(function onfull(value){
    console.log("pr2 is fullfill with",value);
} )
.catch(function error(error){
    console.log("error came betwen",error);
})

