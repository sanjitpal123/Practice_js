const promise1= new Promise((res,rej)=> setTimeout(()=>res("sanjit"),100));
const promise2= new Promise((res,rej)=> setTimeout(()=>res("Manjit"),200));
const promise3=new  Promise((res,rej)=> setTimeout(()=>res("Ranjit"),50));
const racepromise= Promise.race([promise1,promise2,promise3]);
racepromise.then((value)=>{
    console.log(value,"Congratulations you won");
},(value)=>{
    console.log(value,"rejected");
})


