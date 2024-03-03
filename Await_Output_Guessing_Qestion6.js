async function guessOutput6() {
  console.log("start");

  try {
    await Promise.reject("An error occurred");
  } catch (error) {
    console.log(err);
  }

  console.log("End");
}

guessOutput6();


//Output is "Start" "An error occurred"  "End";
