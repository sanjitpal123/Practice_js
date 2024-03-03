function Promise1(){
    return new Promise((res,rej)=>{
        const number=Math.floor(Math.random()*4);

        setTimeout(()=>{
            if(number>2)
            {
            res("Successfull Sanjit");
            }
            else{
                rej(new Error("rejected"));
            }
          },99);
    })
    
}
async function execute()
{
    try{
    const p1=await Promise1();
    console.log(p1);
    } catch(error)
    {
        console.error(error.message);
    }

}
execute();
