
//Bruteforce
var removeDuplicates = function(S, K) {
    for (let i = 1, count = 1; i < S.length; i++) {
     S.charAt(i) === S.charAt(i-1) ? count++ : count = 1
     if (count === K)
     S = removeDuplicates(S.slice(0, i-K+1) + S.slice(i+1), K);
    }
    return S
};
console.log(removeDuplicates("pbbcggttciiippooaais", 2));

//Using Stack
var removeDuplicates = function(S) {
    // empty array
    let stack = []
    // iterate over S
    for (let char of S) {
   // check if the last element of  the stack is equal to the current   element of S
    if(stack[stack.length - 1] ===
   char){
    // true, remove the last element of the stack.
    stack.pop()
} else {
    // false, add the current  element of S to the end of the
   stack.
    stack.push(char)
   }
    }
    // return stack as a string
    return stack.join('');
   };
   console.log(removeDuplicates("pbbcggttciiippooaais", 2));   
