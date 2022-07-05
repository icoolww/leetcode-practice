var twoSum = function(nums, target) {
  let output = [];

  // iterate the nums length
      for(let i = 0; i < nums.length; i++){
        /iterate the next number to check if its equal the target number/
          for(let j = i; j < nums.length; j++){
              if(nums[i] + nums[j] === target){
                  output.push(i);
                  output.push(j);
              }
          }
      }
      return output;
};