// iterate the length through the loops

var plusOne = function(digits) {

  // handling example 1
  for (let i = digits.length - 1; i >= 0; i-- ) {
      if (i = digits.length - 1) {
        digits[i] += 1;
      }
      
      // handling example 3
      if (digits > 9 && digits > 0) {
        digits[i-1] += 1;
        digits[i] = 0;
      }

      // handling number 10 to eliminate number 1
      if (digits[0] === 10 ) {
        digits[0] = 0;
        digits.unshift(1);

      }

  }
  return digits;
};