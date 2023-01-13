/**
 * Problem Statement
You are given an integer K and Q queries. In each query you have to find the sum of first N natural numbers
by taking the powers of K with negative sign. Power of K means KO, K1, K2.... and so on.
For Example, if N = 5, K = 2 then sum will be -1 -2 +3 -4 +5, powers of K here are 20,2,2².
Constraints
•1<=Q<= 2*105
• 1 <= N, K <= 109
• All input values are integers
 */

//to store the value of k
//changes all array elements from start to end index to a static value and returns the modified array
let power = Array (31).fill(0)

// to store presum of powers of k's
let pre = Array(31).fill(0)

let PowerOfK = (k)=>{
    // to store power of k
    let x = 1
    for (let i = 0; i < 31; i++) {
        power[i] = x;
        x *= k
    }   
    pre[0] = 1;
    for (let i = 1; i < 31; i++) {
        pre[i] = pre[i-1] + power[i]
    } 
}

let Sum = (n,k)=>{
    let result = (n * (n+1))/2;

    //find the first greater number than given number then minus variable of this from answer
    for (let i = 0; i < 31; i++) {
       if(power[i] > n){
        result -= k * pre[i-1]
        break;
        } 
    }
    return result;
}

let n = 5;
let k = 2;

PowerOfK(k)

console.log(Sum(n,k))