function createcounter()
{
    let c=0;
    return{
        increment:function (){
            c+=1;
        },
        decrement:function(){
            c-=1;
        },
        reset:function(){
            return c;
        }
    }
}
let c=createcounter();

