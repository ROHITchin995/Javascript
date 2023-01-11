/**
 * Given a string s of brackets `( { [ ] } )` , you need to determine if the provided string S is valid or not?
Condition for the string to be valid:
1. Each opening bracket should have there corresponding closing bracket
2. Order of the opening and the closing bracket should be maintained
Sample Input-1:
(({}))
Output:
True
Explaination:
For each opening bracket with have there corresponding closing backet
Sample Input-2:
(({ )
Output:
False
Explaination:
Closing and opening of the brackets are not matching
Approach:
1. Traversal of the string form left to right
2. On encounter of an open bracket, we will move it to the stack datastructure.
3. On encounter of an top bracket we will check the top most element of the stack, if both the
elements are same then we will pop it out of the stack and continue else we will return false
4. Once the iteration is completed then the stack should be empty as each opening bracket will have
there corresponding closing bracket. If not then return false else true.
Code:
Output
True
 */

function validateString(s) {
    //Stack to store the opening bracket
     const openingBrackets = [];
     //Traverse through each character of the string
     for (let idx = 0; idx < s.length; idx++) {
     //Check if left bracket is encountered
     if (s[idx] === '{' || s[idx] === '(' || s[idx] === '[')
     openingBrackets.push(s[idx]);
     //Else pop the element from the stack after validate the following points
     // 1. check the type of closing bracket
     // 2. check if it is not the last element of the string
     // 3. check if the top most element of the stack is same as the closing bracket
     else if (s[idx] === ')' && openingBrackets.length !== 0 &&
    openingBrackets[openingBrackets.length - 1] === '(') {
     openingBrackets.pop();
     } else if (s[idx] === '}' && openingBrackets.length !== 0 &&
    openingBrackets[openingBrackets.length - 1] === '{') {
     openingBrackets.pop();
     } else if (s[idx] === ']' && openingBrackets.length !== 0 &&
    openingBrackets[openingBrackets.length - 1] === '[') {
     openingBrackets.pop();
    }
    else {
    return false;
    }
    }
    return openingBrackets.length === 0;
   }
   console.log(validateString("(()){}"));