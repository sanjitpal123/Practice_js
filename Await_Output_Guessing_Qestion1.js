async function guessOutput1() {
    console.log("start");
  
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Promise rejected");
      }, 500);
    });
  
    try {
      const result = await promise;
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  
    console.log("End");
  }
  
  guessOutput1();

  // Output is "start", "Promise Rejected ", "End"
  
