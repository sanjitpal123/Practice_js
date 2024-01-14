// Return true if duplicate value is there other wise return false

const ar=[1,1,1,3,3,4,3,2,4,2];
var containsDuplicate = function(nums) {
  let du=[];
  var flag;
 
  for(let i=0;i<nums.length;i++)
  {
    flag=0;
   if(du.includes(nums[i]))
   {
    return true;
   }
   else {
    flag=1;
    du.push(nums[i]);
  }
  }
  if(flag==1)
  {
    return false;
  }
  
};
console.log(containsDuplicate(ar));
