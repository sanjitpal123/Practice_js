
function printInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}

// Use call method to dynamically bind this inside printInfo to different objectsS
printInfo.call(obj={
    name:'sanjit',
    age:20
})

