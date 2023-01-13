/**
 * Fermat's Extra Large Theorem
The fermat's little theorem states that if p is a prime number, then for any integer a, the number aº -a is an integer
multiple of p.
We define a new theorem called Fermat's Extra large theorem stating the total number of unordered pairs (ij) for an
array A of size N,such that if we are given 3 integers S, P and M.
(A, + A,) % M = S and (A, * A,) % M = P Both Holds.
1<=I<J<=N.
You need to apply the Fermat's Extra large theorem and print the total number of unordered pair which follows the
theorem.

INPUT FORMAT:
First Line of the input contains 4 space-separated integers N, M, S, P.
Second line of the input contains N space-separated integers denoting the array A.
OUTPUT FORMAT:
Print the answer to the new theorem as asked in the question.
CONSTRAINS:
1<N<=10¹
1<= M <=106
0<=S, P < M
1<=A[i]<=1000

Sample:
4 2 1 0
1 2 3 2
Sample Output:
4
 */
process.stdin.resume();
process.stdin.setEncoding('utf8');
let inputString = "";
let currentLine = 0;
process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});
process.stdin.on("end", () => {
    inputString = inputString
        .trim()
        .split("\n")
        .map((string) => {
return string.trim();
});
main();
});

function readLine() {
    return inputString[currentLine++];}

 function main(){
    let n, m, s, p;
    let input_arr = readLine.split(" ").map((x)=> parseInt(x))
    n = input_arr[0]
    m = input_arr[1]
    s = input_arr[2]
    p = input_arr[3]

    let input_arr2 = readLine.split(" ").map((x)=> parseInt(x))

    let freq = new Array(1001).fill(0);
    var ans = 0

    for (let i = 0; i < 1001; i++) {
        var temp = input_arr[i]
        freq[temp]++
    }
    for (let i = 1; i < 1001; i++) {
        if(freq[i] == 0) continue;
        for (let j = 0; j < 1001; j++) {
            if((i + j) % m == s && (i * j) % m == p){
                if(i == j){
                    ans+= (freq[i] * (freq[i] - 1))/2
                }else{
                    ans+= freq[i] * freq[j]
                }
            }
            
        }
        
    }

    console.log(ans);
 }