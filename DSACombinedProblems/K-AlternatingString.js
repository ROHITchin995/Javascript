/**
 * Problem Statement
You have been given a binary string S of size N. You also have been given an integer K(1<=k<=N). You have
to print the minimum number of flips(Change an occurrence of '1' to '0' or vice versa) required to make at
least one substring of size K alternating (A binary string is alternating if no two consecutive characters are the
same). For example "10101", "0101", "1", and "0" are examples of alternating binary strings but "11010",
"01001", and "00" are not.
Note:- A substring is a contiguous sequence of characters within a string.
Constraints
1 t 103
• 1 K N 105
o S[i] 1. (i.e S will only contain o's and 1's)
Time Limit:- 1s for C++

Sample Input
5
1 1
0
53
10101
5 3
11001
6 2
111111
6 6
110011
Sample Output
0
0
1
1
3
 */
let binaryString = "111011";
let k = 4;
let n = 6;

//prefix sum
let prefixSum = new Array(n)

for (let i = 0; i < n; i++) {
    if(binaryString[i] == (i%2)){
        prefixSum[i] = 0
    }
    else{
        prefixSum[i] = 1
    }
}

for (let i = 1; i < prefixSum.length; i++) {
    prefixSum[i] = prefixSum[i-1] + prefixSum[i]
}
console.log(prefixSum);

//check window & find minimum flip required
let minFlip = k;

for (let i = 0; i+k < n; i++) {
    let flips = k
    if(i!= 0){
         flips = prefixSum[i+k-1] - prefixSum[i-1];
        minFlip = Math.min(minFlip, flips,k-flips)
    }else{
         flips = prefixSum[i+k-1]
        minFlip = Math.min(minFlip, flips,k-flips)
    }
}
console.log(minFlip);
//get the min