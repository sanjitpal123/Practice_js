function makeTea() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("tea is Ready!");
        }, 2000);
    });
}

function prepareBreakfast() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("toast is ready !");
        }, 3000);
    });
}

const pr1 = makeTea();

pr1
    .then((result) => {
        console.log(result);
        return prepareBreakfast();
    })
    .catch((error) => {
        throw error; 
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error.message);
    });

