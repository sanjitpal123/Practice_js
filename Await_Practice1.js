function promise1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(90);
        }, 8900);
    });
}

function promise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(100);
        }, 7900);
    });
}

function promise3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(90);
        }, 900);
    });
}

async function execute() {
    try {
        const [result1, result2, result3] = await Promise.all([promise1(), promise2(), promise3()]);
        console.log("Fulfilled:", result1+result2+result3);
    } catch (error) {
        console.error("Error:", error);
    }
}

execute();

