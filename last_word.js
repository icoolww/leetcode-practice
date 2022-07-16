
// iterate the loop from the last order (i--)
// eliminating the empty spaces available (using syntax trim())
// counting the word only (count the length of the words)

var lengthOfLastWord = function(s) {
  
  // removing white spaces from start and the end
  s = s.trim();
  // using match to retireive the result
  if (s.match(/\s/)) {
    return s.length;
  }

  // iterate from the last order
  let lastWord = [];
  
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      lastWord.push(s[i]);
    }
    if (s[i] === " " && lastWord.length >= 1) {
      return lastWord.length;
    }
  }
};
  

  
  // var lengthOfLastWord = function(s) {
      
  //   // removing white spaces from start and the end
  //   let arr = s.trim().split(" ");
  //   return arr[arr.length - 1].length;
  // };