//Define an object person with properties name and age. Write a function introduce that logs "Hello, my name is [name] and I am [age] years old." Use bind() to create a new function intro that introduces the person.

const person={
    name:'sanjit',
    age:30
}
function introduce()
{
    console.log(`Hello my name is ${this.name} and my age is  ${this.age}`);
}
const per=introduce.bind(person);
per()