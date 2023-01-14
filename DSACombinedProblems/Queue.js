/**
 * Problem Statement
You have been given an array A of size N, which contains only O's and 1's. 
You have to make array A sorted in non-decreasing order. You can do the following operation as many 
times as you want
Choose some indices (At least one) i (1 i N-1) such that for all chosen i, A[i] = 1 and A[i+1] = 0. 
Swap A[i] and A[i+1],
Print the minimum number of operations you need to sort array A in non-decreasing order.
Constraints
1 t 103
1 N 105
•O A[i] 1
Time Limit:- 1s for C++

Input Format
First-line contains a single integer t, the number of test cases.
The first line of each test case contains a single integer N, the number of elements in array A.
The second line of each test case contains N integers.
The sum of N over all test cases doesn't exceed 2*105

Output Format
For each test case, output a single line the minimum number of operations you need to sort array 
A in non-decreasing order.

 */
function sortingArr(N, arr) {
    let operations = 0;
    let sorted = false
    while (!sorted) {
        sorted = true
        for (let i = 0; i < N; i++) {
            if (arr[i] == 1 && arr[i + 1] == 0) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                i++
                sorted = false
            }
        }
        if(sorted == false){
            operations++
        }
    }
    return operations
}



let N = 5;
let arr = [1, 0, 1, 1, 0];
let result = sortingArr(N, arr);
console.log(result);
