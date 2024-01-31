

const promise = new Promise((resolve) => resolve("First"));

promise.then(console.log);
promise.then(() => console.log("Second"));

// Output will be "First" "Second " cause here promise is resolved with "First" Massage , first promise.then function is passing console.log as an parameter so it will print "First" Massage , and second promise.then  function is not giving any call back it is directly printing "Second "
