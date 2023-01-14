/**
 * Problem Statement
You are given N arrays A1, A2, AN, You have to tell if it is possible to find some integers C1, C2....CN, such that:
Let
о B1 = array formed after subtracting C1, from all elements of A1,
о B2 = array formed after subtracting C2, from all elements of A2,
O
BN = array formed after subtracting CN, from all elements of AN
 Then B1 = B2 = .... = BN, must hold.

If it is possible to find such positive integers C1, C2... CN, that satisfies the given conditions
 then print "YES", else print "NO".

 Input Format
First line contains a single integer T denoting the number of test cases.
First line of each testcase contains a single integer N.
Next N lines of every testcase contain N space separated integers denoting elements of arrays A1, A2,.... AN
Output Format
For every testcase print "YES" if it is possible to find such positive integers C1, C2, ... CN that satisfies 
the given conditions elese print "NO".

Constraints
• 1<=T<=5
1<=N<=500
O<= Elements of array Ai<=10^10

Sample Input 1
2
3
4 3 5
2 1 3
3 2 4
3
4 3 5
2 2 3
3 2 4

Sample Output 1
YES
NO
 */

function subtractArrays(currArr, targetArr) {
    let C = currArr[0] - targetArr[0]
    if (C < 0) {//diff -ve
        return false
    }
    else {// diff +ve
        for (let i = 0; i < currArr.length; i++) {
            if (currArr[i] - targetArr[i] != C) {
                return false
            }

        }
    }
    return true
}

function NArrays(N, arr) {

    //find target array 
    let targetArr = 0;
    let minNum = Infinity;
    for (let i = 0; i < N; i++) {
        if (arr[i][0] < minNum) {
            minNum = arr[i][0];
            targetArr = i;
        }
    }
    //try to convert every array to target array 
    for (let i = 0; i < N; i++) {
        if (i != targetArr) {
            let result = subtractArrays(arr[i], arr[targetArr]);
            if (result == false) {
                return false;
            }
        }
    }
    return true;
}


let N = 3;
let arr = [
    [4, 3, 5],
    [2, 1, 3],
    [3, 2, 4]
];
let result = NArrays(N, arr) ? "Yes" : "No";
console.log(result);