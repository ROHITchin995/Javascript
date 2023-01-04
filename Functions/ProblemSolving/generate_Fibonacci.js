//Create Fibonacci series of 5 and 8
/**
 * Hint : The Fibonacci sequence is a series of numbers in which each number is the sum of the two that
precede it. Starting at 0 and 1, the sequence looks like this: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, and so on
forever. 
 */

let a = 0
let b = 1;

let n = 5
console.log(a)
console.log(b)

for(let i=1;i<=n;i++){
    c = a + b;
    a = b;
    b = c;
    console.log(c)
}