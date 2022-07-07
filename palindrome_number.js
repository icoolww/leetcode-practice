// if number is negative, return false
// iterate, read the number from right to left and compare it to (x)

var isPalindrome = function(x) {
    // handling negative
    if (x < 0) {
      return false;

    // handling from right to left
    let rightToLeft = Number(x.toString().split("").reverse().join(""));
    if (x === rightToLeft){
      return true;
    }
    }
    return false;
};