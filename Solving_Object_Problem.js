/*Create an object called person with properties: name, age, and gender.
Write a method within the person object called greet that logs a greeting message using the person's name.
*/

const person={
    name:"sanjit",
    age:20,
    gender:"male",
  greet:function()
     {
        console.log("hello",this.name);
     }
};
person.greet()