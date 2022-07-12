var isValid = function (s) {
  // return false if empty
  if (s.length === 0) return false;

  //creating empty stack to push the bracket later
  let stack = [];

  // iterate through loop, push the left side to the stack,
  for (let bracket of s) {
    if (bracket === "(" || bracket === "{" || bracket === "[") {
      stack.push(bracket);
    }
    // if left bracket isnt equal with the stack, return false;
    else {
      let leftBracket = stack.pop();
      if (bracket === ")" && leftBracket !== "(") {
        return false;
      }
      if (bracket === "}" && leftBracket !== "{") {
        return false;
      }
      if (bracket === "]" && leftBracket !== "[") {
        return false;
      }
    }
  }

  if (stack.length > 0) return false;

  return true;
};