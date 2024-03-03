const person={
    name:'sanjit Pal'
}
const greet=function()
{
    console.log(` Hii ${this.name} `);
}
const newgreet=greet.bind(person);
newgreet()
