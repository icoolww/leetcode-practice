
// iterate through nums 
// if target = iterated nums, show the index of the number
// if no targeted nums, returns -1 


var search = function(nums, target) {
    for(let i = nums.length-1; i>=0; i--){
        if(nums[i] === target)
            return i;
    }
    return -1;  
};



  // let search = function(nums, target) {
  //   for (let num of nums ) {
  //       if (num === target){
  //           return num;
  //       }
  //   }
  //   return -1;
  // };
