// Question 2
const promise = new Promise((resolve) => resolve(1));

promise.then((value) => value + 1)
       .then((value) => value * 2)
       .then(console.log);

// Answe: 4
// cause here promise is resolved with 1 and first .then is adding 1 with resolve value so it 2
// then second .then is getting 2 cause .then returns a brand new object on this value we are multipling with 2 so it being 4


