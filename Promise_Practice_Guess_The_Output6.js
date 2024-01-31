const promise = new Promise((resolve) => {
    resolve(
        new Promise((innerResolve) => {
            setTimeout(() => innerResolve("Nested Promise"), 1000);
        })
    );
});

promise.then(console.log);

//  here the output is "Nested Promise " cause the Outer promise is resolving with a promise which is also resolving with "Nested promise " that's why output is "Nested promise"