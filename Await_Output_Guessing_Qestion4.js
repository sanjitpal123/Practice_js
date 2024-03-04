async function guessOutput4() {
  console.log("start");

  const value = await 42;
  console.log(value);

  console.log("end");
}

guessOutput4();

//output is "start" 42 "end";
