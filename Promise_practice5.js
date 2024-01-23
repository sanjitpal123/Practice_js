function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
     
      setTimeout(() => {
        const users = {
          1: { name: 'John Doe', age: 25 },
          2: { name: 'Jane Smith', age: 30 },
          
        };
  
        const user = users[userId];
  
        if (user) {
          resolve(user);
        } else {
          reject('User not found');
        }
      }, 1000);
    });
  }
  
 
  const userId = 1;
  
  fetchUserData(userId)
    .then((user) => {
      console.log("User data:", user);
    })
    .catch((error) => {
      console.error(`Error:`, error);
    });
  