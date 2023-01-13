/**
 * Given an array A of size N, containing unique numbers. Your task is to
 * find the count of permutations that can be formed from all subsets
 * of array A which strictly contain prime numbers
 * find the count modulo (10^9 + 7)
 * 
 * Example [2,3,5,9] => Ans is 15
 * prime numbers seperated => [2,3,5]
 * 1 permutation combination each => [2] [3] [5]
 * 2 permutation combination each => [2,3] [2,5] [3,5]
 * 6 permutation combination => [2,3,5]
 * 
 * 1<= N <= 10^3
 * 0 <= Ai <= 10^6
 * 
 * Bruteforce - We can generate all possible subsets contain only primes
 */

let fact = [1] //precompute
const mod = 1000000007;
function isPrime(num) {
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}
function factorial() {
    for (let i = 1; i <= 1000005; i++) {
        fact[i] = ((fact[i - 1] % mod) * (i % mod)) % mod;
    }
}
function countPermutation(n, arr){
   factorial()
   let pr = 0 // count of primes
   for (let i = 0; i < n; i++) {
    if(isPrime(arr[i])) pr++;
   }
   let ans = 0
   for (let i = 0; i <= pr; i++) {
    ans = ((ans%mod) + (Math.floor(fact[pr]/fact[pr-i]))%mod)%mod
   }
   return ans
}

console.log(countPermutation(4, [2,3,5,9]))