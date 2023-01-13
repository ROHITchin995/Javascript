/**
 * Problem Statement
Alice is standing on a grid having infinitely many rows and columns. Each cell of the grid (i, j) contains a number i*j.
Initially, Alice is standing on cell (0, 0). In one move Alice can go to any adjacent cell of her current cell, i.e if Alice is
standing on cell (i, j) then in one move Alice can go to either of the cell (i+1, j), (i-1, j), (i, j+1), or (i, j-1).
Alice gives you a number N, you have to tell what is the minimum number of moves Alice needed to go from
(0, 0) to any cell in which number N is written.
Constraints
•
1 t 104
1 N 106
Time Limit:- 1s for C++

Input Format
First-line contains a single integer t, the number of test cases.
Each test case contains a single integer N.
Output Format
For each test case, output a single line- the minimum number of moves Alice needed to go from (0, 0) to any cell in
which number N is written.
Sample Input
4
1
6
7
10
Sample Output
S500
2
 */

let N = 12
function minimumMoves(){
    let minMoves = Infinity;
    for (let i = 0; i < Math.sqrt(N); i++) {
       if(N%i == 0){
        let j = N/i;
        let currentMoves = i+j
        if(minMoves>currentMoves) minMoves = currentMoves
       }
        
    }
    return minMoves
}


console.log(minimumMoves(N));

//optimized version

function minimumMoves2(){
    let minMoves = Infinity;
    for (let i = parseInt(Math.sqrt(N)); i >=1 ; i--) {
       if(N%i == 0){
        let j = N/i;
        let currentMoves = i+j
        minMoves = currentMoves
        break
       }
        
    }
    return minMoves
}
console.log(minimumMoves2(N));