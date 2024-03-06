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

  // Output Is "start" "inner function resolved","End"
  
  
