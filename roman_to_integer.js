var romanToInt = function(s) {
    
  let table = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
  }
  
  let output = 0;
  for (let i = 0; i < s.length; i++) {
      // handling substraction
      if (table[s[i]] < table[s[i+1]]) {
          output -= table[s[i]];
      }
   else {
    // handling addition 
      output += table[s[i]];
   }
      
  }
  
  return output;
};