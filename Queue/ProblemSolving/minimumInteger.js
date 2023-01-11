/**
 * Given a string S of numbers and an integer N, you need to find the minimum possible integer that can be formed after removing N
digits from the string S
Example Input-1:
S = 10300 N=1
200
Example Input-2:
S = 121198 N=2
1118
Approach:
Traverse through each character of the string S and at each character Find the minimum value character among position
of character and the following n+1 character of String S and place it in the resultant string. 

 */

function findMinimumInteger(S,k)
{
 let resultantStack = [];

 // Store the final string in stack
 for (let ch of S)
 {
 while (resultantStack.length>0 && k > 0 &&
 resultantStack[resultantStack.length-1].charCodeAt(0) > ch.charCodeAt(0))
 {
 resultantStack.pop();
 k -= 1;
 }

 if(resultantStack.length > 0 || ch !== '0')
 resultantStack.push(ch);
 }

 // Remove largest value from top of stack
 while(resultantStack.length > 0 && k--)
 resultantStack.pop();
 if (resultantStack.length == 0)
 return "0";
//Convert the number in stack to string
let res_string = ""
 while(resultantStack.length > 0)
 {
 res_string = resultantStack[resultantStack.length - 1]+res_string;
 resultantStack.pop();

 }
 return res_string;
}
// Driver code
let str = "765028321"
let k = 5
console.log(findMinimumInteger(str, k));