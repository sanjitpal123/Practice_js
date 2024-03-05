async function guessOutput3() {
  console.log("Start");

  const promise1 = new Promise(resolve => setTimeout(() => resolve("Promise 1"), 500));
  const promise2 = new Promise(resolve => setTimeout(() => resolve("Promise 2"), 300));

  const [result1, result2] = await Promise.all([promise1, promise2]);

  console.log(result1);
  console.log(result2);

  console.log("end");
}

guessOutput3();
// Output is "Start" "Promise 1" "Promise2" "End"
