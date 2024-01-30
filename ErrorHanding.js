const promse= function createpromise()
{
    return new Promise((res,rej)=>{
        rej('sanjit');
    });
}
const pr1=promse();
pr1.then(function fullfillment(value){
    console.log("Pr1 is fullfilled with",value);
}, function onreject(value){
    console.log("pr1 is rejected with",value);
    throw 800
   
})
.then(function onfullfill(value){
    console.log("pr2 is fullfilled with",value);
},function onrejected(value){
    console.log("Pr2 is rejected with",value);
    return value;
}).then(function onfullfill(value){
    console.log("pr3 is fullfillment with ",value);
},function onrejected(value){
    console.log("pr3 is rejeted with ",value);
})