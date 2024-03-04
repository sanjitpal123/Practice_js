async function guessOutput4() {
  console.log("Start");

  const value = await 42;
  console.log(value);

  console.log("end");
}

guessOutput4();

//Output is "start" 42 "end";
