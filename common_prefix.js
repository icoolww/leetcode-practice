var longestCommonPrefix = function (strs) {
  let output = "";

  //     handling empty input
  if (!strs.length) return output;

  // loop only first word
  for (let i = 0; i <= strs[0].length; i++) {

    // loop words after the first
    for (let j = 1; j < strs.length; j++) {

      // checking condition
      if (strs[0][i] !== strs[j][i]) {

        
        return strs[0].slice(0, i);
      }
    }
  }

  return strs[0];
};
