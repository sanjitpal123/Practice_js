//Given two objects obj1 and obj2, each containing a greet method, use the call method to invoke the greet method of obj1 with the context of obj2.
const obj1={
    name:'sanjit',
    greet:function()
    {
        console.log(` Hello ${this.name}`);
    }
}
const obj2={
    name:'manjit',
    greet:function()
    {
        console.log(`Hello ${this.name}`);
    }
}
obj1.greet.call(obj2);
