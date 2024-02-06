class product{
    name;
    price;
    color;
    constructor(name,color,price)
    {
        this.name=name;
        this.color=color;
        this.price=price;
    }
    display()
    {
        console.log(`product name is ${this.name} and product price is ${this.price} and product color is ${this.color}`);
    }
}

const obj=new product("samsung","black",22992);
console.log(obj);