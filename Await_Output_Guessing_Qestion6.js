async function guessOutput6() {
  console.log("Start");

  try {
    await Promise.reject("An error occurred");
  } catch (error) {
    console.log(error);
  }

  console.log("End");
}

guessOutput6();


//Output is "Start" "An error occurred"  "End";