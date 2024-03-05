async function innerFunction() {
    return "inner function resolved";
  }
  
  async function guessOutput2() {
    console.log("Start");
  
    const result = await innerFunction();
    console.log(result);
  
    console.log("End");
  }
  
  guessOutput2();

  // Output is "start" "Inner function resolved","End"
  
  
