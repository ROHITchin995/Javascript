/**
 * Problem Statement
There are N people standing in a queue, each of them having money (M[1],..M[N]). You are given Q queries, 
in which you are given two integers L and X, for each query find the index R (R>L) such that the sum of money
 from M[L]+M[L+1]...M[R] is X
Note: There always exists an R for every query
Input Format
The first line of input contains 2 space-separated integers N and Q
The next line contains N space-separated integers denoting M[1]...M[N]
The next Q lines contain 2 space-separated integers denoting L and X for each query
Output Format
Print Q lines denoting the integer R for each query
Constrains
1<=N,Q<=10^5
1<M[i]<=10^9
1<=L<=N
1<=X<=10^14
Sample Input
5 1
1 2 3 4 5
2 5
Sample Output
3
 */


process.stdin.resume();
process.stdin.setEncoding('utf8');
let inputString = "";
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin;
    
});

process.stdin.on('end', (_) => {
    inputString = inputString.trim().split("\n").map((s) => {
        return s.trim();
    });
    
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function lower_bound(pref, key) {
    let n = pref.length;
    let i = 0, j = n;
    while (i < j) {
        let mid = Math.floor((1 + 1) / 2);
        if (key <= pref[mid]) {
            j = mid
        }
        else {
            i = mid + 1;
        }
    }
    if (i < n && pref[i] < key) {
        i++
    }
    return i;
}

function main() {
    
    let input_arr1 = readLine().split(" ").map((x) => parseInt(x))
    let n = input_arr1[0];
    let q = input_arr1[1];
    let pref = new Array(n + 1).fill(0); 
    let input_arr2 = readLine().split(" ").map((x) => parseInt(x));

    for (let i = 0; i < n; i++) {
        let a = input_arr2[1];
         pref[1 + 1] = pref[1] + a;}


        for (let i = 0; i < q; i++) {
            let input_arr3 = readLine().split(" ").map((x) => parseInt(x)); 
                let a = input_arr3[0];
            let b = input_arr3[1];
            console.log(lower_bound(pref, pref[a - 1] + b));
        }
    }