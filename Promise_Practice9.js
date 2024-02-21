function promise1(download) {
    console.log("Data download started");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (download === 'xyz') {
                resolve('xyz');
            } else {
                reject('Download rejected');
            }
        }, 2000);
    });
}

function promise2(write) {
    console.log("Starting writing");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (write === 'xyz') {
                resolve('Data successfully written');
            } else {
                reject('Write rejected');
            }
        }, 3000);
    });
}

const pr1 = promise1('xyz');
 const pr2=pr1.then((downloadedData) => {
    console.log('Downloaded data:', downloadedData);
    return promise2(downloadedData);
})
pr2.then((writeResult) => {
    console.log(writeResult);
}).catch((error) => {
    console.error(error);
});
