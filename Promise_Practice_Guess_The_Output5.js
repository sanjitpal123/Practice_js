const promise1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1'), 500));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject('Promise 2'), 200));
const promise3 = new Promise((resolve) => setTimeout(() => resolve('Promise 3'), 1000));

Promise.race([promise1, promise2, promise3])
    .then(console.log)
    .catch((error) => console.log("Error:", error));

    //  Promise.race settles as soon as the first promise settles, either by fulfillment or rejection. In this case, promise2 has the shortest timeout and settles first, leading to rejection with the reason 'Promise 2'. The .catch block captures this rejection, resulting in the output "Error: Promise 2".