
function promise(age)
{
    return new Promise((res,rej)=>{
        if(age>=18)
        {
            res("You can vote");
        }
        else{
            rej("you can not vote");
        }
    },9000)
}
const p=promise(12);
p.then((result)=>{
    console.log(result);
})
.catch((value)=>{
    console.log(value);
})