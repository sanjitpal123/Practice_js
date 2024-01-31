const promise1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1 resolved'), 1000));
const promise2 = new Promise((reject) => setTimeout(() => reject('Promise 2 rejected'), 500));
const promise3 = new Promise((resolve) => setTimeout(() => resolve('Promise 3 resolved'), 1500));

const racePromise = Promise.race([promise1, promise2, promise3]);

racePromise.then(
    (value) => {
        console.log('Race won by:', value);
    },
    (reason) => {
        console.log('Race rejected with reason:', reason);
    }
);
