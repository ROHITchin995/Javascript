/**
 * Problem Statement
Consider a number N represented as d1,d2, d....dk, where di denotes the ith digit from left in N. 
We define f(N) as
f(N) = Σ (di + i)%2 ki=1
A number N is called beautiful if: f(N) > 0
Count how many beautiful numbers exists between L and R (both inclusive). 
For Example, let N = 286,
 f(N) = (2+1)%2 + (8+2) %2 + (6+3) % 2 = 2, since f(N)>0, so N is a beautiful number. 5, 121, 1838 are
  NOT beautiful numbers.
Constraints
• 1 <= L, R <= 10^18
• All input values are integers.

Input Format
• First-line contains two space separated integers L and R.
Output Format
• Print the count of beautiful numbers in the range L and R (both inclusive).
Sample Input 1
2 10
Sample Output 1
4
 */

function beautifulCount(L, R) {
    let count = 0;
    for (let n = L; n <= R; n++) {
        let sum = 0;
        n.toString().split('').map((digit, idx) => {
            sum += (parseInt(digit) + (idx + 1)) % 2;
        })
        if (sum > 0) {
            count++;
        }
    }
    return count;
}
    let L = 2;
    let R = 10;
    let beautifulNoCount = beautifulCount(L, R);
    console.log(beautifulNoCount);