//Create two Map objects, map1 and map2, each containing some key-value pairs. Write a function called mergeMaps that takes two Map objects as arguments and returns a new Map containing all the key-value pairs from both maps. If there are keys that exist in both maps, the value from map2 should overwrite the value from map1.
const mp1=new Map();
const mp2=new Map();
mp1.set('name','sanjit');
mp1.set('skill','web dev and dsa');
mp2.set('name',"manjit");
mp2.set('age','22');
function mergeMaps(mp1,mp2)
{
    let mergemp = new Map();

    // Assuming mp1 and mp2 are Map objects
    for (let [key, value] of mp1.entries()) {
        if (!mergemp.has(key)) {
            mergemp.set(key, value);
        }
    }
    
    for (let [key, value] of mp2.entries()) {
        if (!mergemp.has(key)) {
            mergemp.set(key, value);
        }
    }
    console.log(mergemp);
}
mergeMaps(mp1,mp2);