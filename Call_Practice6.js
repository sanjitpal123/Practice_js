//Define an object outer containing an inner object inner with a displayInfo method. Use the call method to invoke displayInfo with the context of outer.
const outer={
    name:'sanjit',
    inner:{
        displayInfo:function()
        {
            console.log(`my name is ${this.name}`);
        }
    }
}
outer.inner.displayInfo.call(outer);


