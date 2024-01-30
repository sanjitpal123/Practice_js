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
})
.catch(function r2(error){
    console.log("r1 error ",error);
    throw 32
})
.then(function onfull(value){
    console.log("pr2 is fullfill with",value);
} )
.catch(function error(error){
    console.log("error came betwen",error);
    throw error;
    
})
.then(function onfull(value){
    console.log('Fullfilled with',value);
}).catch(function r3(error){
    console.log("error came between",error);
})

