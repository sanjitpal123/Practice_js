


function sayHello() {
    console.log(`Hello, ${this.name}!`);
}

const person1 = { name: 'Alice' };
const person2 = { name: 'Bob' };

// Use call method to invoke sayHello with person1 and person2 contexts
sayHello.call(person1);
sayHello.call(person2);