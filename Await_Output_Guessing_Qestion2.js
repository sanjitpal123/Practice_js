async function innerFunction() {
    return "Inner function resolved";
  }
  
  async function guessOutput2() {
    console.log("Start");
  
    const result = await innerFunction();
    console.log(result);
  
    console.log("End");
  }
  
  guessOutput2();

  // Output is "Start" "Inner function resolved","End"
  
  