/**
 * Question: 1

You just met Buzz Lightyear , he has found an “infinity and beyond” box which contains an unlimited supply of odd numbers from 3 to infinity
but has no 1s. Your favourite number is X , and you want to know how many sequences Buzz can create from the infinity and beyond box that sums up to your favourite number X.

Formally , how many distinct sequences you can form from the numbers in the box, whose sum is X.

Since the number can be very large , print it modulo 109+7

 

Constraints:
1<= X <= 2000

Input Format:
First and only line of input contains an integer X (your favourite number)

Output Format
Print an integer (the number of possible subsequences) modulo 109+7

Sample Input:
9

Sample Output:
2

Explanation :
sequences (9},{3,3,3}


 */

const mod = 1000000007

let currSum = 0;
function findAllPossibleSolutionsCount(currSum) {
    if (currSum === n) return 1;
    if (currSum > n) return 0;

    if(dp[currSum]!= -1){
        return dp[currSum]
    }
    let possibleSolutionsCount = 0

    for (let i = 3; i <= n; i = i + 2) {
        possibleSolutionsCount += findAllPossibleSolutionsCount(currSum + i)
    }
    dp[currSum] = possibleSolutionsCount % mod;
    return possibleSolutionsCount % mod;

}
var n = 90
let dp = Array(n).fill(-1)
console.log(findAllPossibleSolutionsCount(currSum))