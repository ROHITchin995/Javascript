/**
 * Problem Statement
Antonio is a collector. He collects antique items in this collection. 
He has a String A of size N whose each character is a box and each box contains '.' or 'x'.
If A[i]= "." means ith box is empty.
If A[i]='x' means ith box contains an antique item.
Antonio can shift the item from one box to another according to the given rules
• Antonio can shift item from ith box to (i+2)th box if i+2<N, (i+1)th box contain antique item and 
(i+2)th box is empty.
• Antonio can shift item from ith box to (1-2)th box if i+2>=0, (i-1)th box contain antique item and
 (i-2)th box is empty.
Antonio wants to count the total number of unique permutations of states of antique items he can 
generate by using the above rules.
Note:
Count can be large so print count%mod where mod=10^9+7

Input Format
First-line containing single integer N, the size of array. 
Second-line is a string A.
Output Format
• Print the total number of unique permutations of states of antique items
Constraints
1<=N<=10^5
Sample Input 1
4
.xx.
Sample Output 1
3
 */

// count of .
// count of xx
// permutation - (.+ xx)!/(.) !*(xx) !

function fact(num){
    let factorial = 1;
    for (let index = 1; index <= num; index++) {
        factorial = factorial * index
        
    }
    return factorial
}

let input = ".xx."

let countOfDot = 0;
let CountOfXX = 0;

for (let index = 0; index < input.length; index++) {
    const element = input[index];
    if (element === ".") {
        countOfDot+= 1
    }
}
for (let index = 0; index < input.length; index++) {
    const element1 = input[index];
    const element2 = input[index+1];
    if (element1 === "x" && element2 === "x") {
        CountOfXX+= 1
        index++
    }
}

let ans = fact(CountOfXX + countOfDot)/(fact(CountOfXX)*fact(countOfDot))

console.log(ans);

