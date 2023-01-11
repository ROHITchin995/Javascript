/**
 * Given two mathematical expressions you have to determine if both of them are same or not?
Note:There will be 26 operands and each of them will be unique in an expression
Input-1:
124*+
Output:
9
Explanation:
2*4 = 8
1+8 = 9
Input-2:
6784/+-
Output:
-3
Explanation:
8/4 = 2
7+2 = 9
6 - 9 = -3
Approach:
Given the postfix expression we will use stack to store the integers and then as an operator is received well pop last two element fthe stack compute the operation and push it back in stack uptill the last value of the expression.

 */

function computeexp(exp)
{
 let stack=[];
 for(let idx=0;idx<exp.length;idx++)
 {
 let ch=exp[idx];

 if(! isNaN( parseInt(ch) ))
 stack.push(ch.charCodeAt(0) - '0'.charCodeAt(0));
 else
 {
 let v1 = stack.pop();
 let v2 = stack.pop();

 switch(ch)
 {
 case '-':
 stack.push(v2- v1);
 break;

 case '+':
 stack.push(v2+v1);
 break;

 case '/':
 stack.push(v2/v1);
 break;

 case '*':
    stack.push(v2*v1);
    break;
    }
    }
    }
    return stack.pop();
   }
   let exp="331*+";
   console.log(computeexp(exp));