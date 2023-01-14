/**
 * INF-Concatenation
Time Limit: 3sec
You are given an array A with size N (indexed from 0). Let's define another array B as the array
 that's formed by concatenating infinite copies of array A.
For example, if A = (1, 2) then B = (1, 2, 1, 2, 1, 2,...........
You have to find the subarray sum of the array B from index L, to R,
Where L and R are arrays of size Q denoting the initial and ending index of the ith Query. 
Formally, you should compute the value of B[i] + B[i+1] + B[i+2]....B[j], where O<= i <= j
Since the sum of the infinitely long subarray can be huge, print the answer as modulo 10^9+7.

INPUT:
First line of each test case contains T number of test cases to answer. First line of Each test case contains N, 
the size of the array.
Second line N space-separated integers denoting the array itself.
Third line contains Q denoting the size of the Star index and End index array (array L, and Array R) Fourth line Contains 
Q space-separated integers denoting array L(Start index array)
Fifth line Contains Q space-separated integers denoting array R(Ending index array)
OUTPUT:
For each test case print Q space-separated integers denoting the answer to the range L, and R..

CONSTRAINS: 
1<=T<= 100 
1<= N, Q <=10^4
1<=Array[i] <=10^9
 1<=L,,R,<= 10^18
Sample Input:
1
3
4 1 5
3
9 1 3 
10 4 7
Sample OUTPUT:
9 14 19

 */

function val(sum, X, N) {

    return (sum[X] + ((Math.floor(X / N) & M)* sum[N])% M)% M;
}
    function solve() {
        let inp = readLine().split(" ").map((x) => parseInt(x)); let T = parseInt(inp[0], 10);
        while (T--) {
            inp = readLine().split(" ").map((x) => parseInt(x));
            let N = parseInt(inp[0], 10);
            let arr = [];
            inp = readLine().split(" ").map((x) = parseInt(x)); 
            for (let i = 1; i <= n; i++) {
                arr[i] = parseInt(inp[i - 1], 10);
            }
            inp = readLine().split(" ").map((x) = parseInt(x));
             let Q = parseInt(inp[0], 10);
            let L = new Array(0).fill(0);
            let R = new Array(0).fill(0);
            inp = readLine().split(" ").map((x) = parseInt(x)); 
            for(let i = 0; i < Q; i++) {
                L[i] = parseInt(inp[i], 10);
            }
            inp = readLine().split(" ").map((x) = parseInt(x)); 
            for(let i = 0; i < Q; i++) {
                R[i] = parseInt(inp[i], 10);
            }
            let sum = new Array(N+1).fill(0);
            sum[0] = 0;
            for (let i = 1; i <=N; i++) {
            sum[i] = (sum[i-1]+arr[i])%M;
                
            }
            for (let i = 0; i < Q; i++) {
                console.log((val(sum,R[i],N)-val(sum,L[i]-1,N)+M)%M);
                
            }
        }
    }
        