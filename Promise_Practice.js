function promise1() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("promise 1");
        }, 1000);
    });
}

function promise2() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("promise 2");
        }, 2000);
    });
}

function promise3() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("promise 3");
        }, 3000);
    });
}

const ArrayOFPromise = [promise1, promise2, promise3];

function executeSequentially(promises) {
    // Start the chain with an immediately resolving promise
    let chain = Promise.resolve();

    promises.forEach((promiseFunction) => {
        chain = chain.then(() => promiseFunction())
            .then((value) => {
                console.log("Successful with", value);
            })
            .catch((error) => {
                console.log("Failed with", error);
            });
    });
}

executeSequentially(ArrayOFPromise);
