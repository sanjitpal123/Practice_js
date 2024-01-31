const promise = new Promise((resolve, reject) => {
       reject("Error!");
   });
   
   promise.catch((error) => console.log(error));
   // answer is "Error!"cause here we are rejecting with "Error!" Massage and we are hadling it with catch which takes one call back function 
   