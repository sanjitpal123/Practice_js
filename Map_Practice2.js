//Create a Map object called myMap and add a few key-value pairs to it. Write a function called printMap that takes a Map object as an argument and prints out each key-value pair in the format "Key: [key], Value: [value]".
const myMap=new Map();
myMap.set("name",'sanjit');
myMap.set("age","20");
myMap.set('skills','Web Development');
 function PrintMap(map)
 {
    for(let [key,values] of map.entries())
    {
        console.log(`key :${key} - value:${values}`);
    }
 }
 PrintMap(myMap);