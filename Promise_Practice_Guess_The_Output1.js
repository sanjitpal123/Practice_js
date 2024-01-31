//Question1
const promise = new Promise((resolve, reject) => {
    resolve("Success!");
});

promise.then((value) => console.log(value));
// ans:- Success
// cause here  promise is resolved with success massage  



