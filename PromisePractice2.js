//Create a promise that resolves after 2 seconds and logs a success message. Use setTimeout to simulate an asynchronous operation.



const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 2000);
});

promise.then(
  function onFulfillmentHandler(result) {
    console.log(result);
},

);