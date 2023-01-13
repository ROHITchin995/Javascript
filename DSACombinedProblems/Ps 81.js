/**
 * Problem Statement
Again Alice and Bob are playing a Jumping game. This time Alice and Bob are standing on an infinitely long number
line. Initially, Alice is at position 0 and Bob is at position X(X can be negative, positive, or zero). Bob has to take
exactly N jump and each jump should be exactly D meter long, In each jump, Bob can go from position i to position
i+D or i-D.
Bob's goal is to reach as near as possible to Alice in exactly N jumps. Bob is not good at math so he asked
you to print the minimum possible distance between Alice and Bob after N jump.
Constraints
• 1 t 103
10-10 X 1010
• 1 N, D 1010
Time Limit:- 1s for C++

Input Format
First-line contains a single integer t, the number of test cases.
Each test case contains three integers X, N, and D, i.e Initial position of Bob, Number of jump bob have to take and length
of each jump.
Output Format
For each test case, output a single line- print the minimum possible distance between Alice and Bob after the N
jump.
Sample Input
3
3 2 2
-5 3 1
0 2 2
Sample Output
1
2

 */

function minDistance(X, N, D) {
    X = Math.abs(X);
    let totalDis = N * D;


    if (totalDis <= X) {
        return X - totalDis;
    } else {
    }


    let reqMoves = X / D;
    let remDis = X % D;
    let remMoves = N - reqMoves;
    if (remMoves % 2 == 1) {//remaining moves are odd
        return Math.abs(D - remDis);
    }
    else {
        //remaining moves are even
        return remDis;
    }
}


let N = 5;
let X = 10;
let D = 1
let minDis = minDistance(X, N, D)
console.log();


