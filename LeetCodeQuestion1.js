//Palindrome check 

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString(); 
      let s = x.split('').reverse().join('');
  
      if (s === x) {
          return true;
      } else {
          return false;
      }
  };
