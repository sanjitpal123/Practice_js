class student{
  name;
  age;
  grade;
  constructor(n,a,grade)
  {
    this.name=n;
    this.age=a;
    this.grade=grade;
    return 10;
  }
  display()
  {
    console.log(`My name is ${this.name} and my age is${this.age} and my grade is ${this.grade}`);
  }

}
const student1=new student("sanjit",20,'A+');
console.log(student1);