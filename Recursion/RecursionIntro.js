//Factorial of a number using recursion method
function factorial(x){
    if(x == 1) return 1;
    return x * factorial(x-1)
}
console.log(factorial(5))

//Fibonacci problem using recursion

function fib(n){
    if( n == 0 || n == 1) return n;
    return fib(n-1) + fib(n-2)
}
console.log(fib(5));

//Print increasing numbers using recursion
function f(n){
    if(n == 1){
        console.log(1);
        return
    }
    f(n-1)
    console.log(n);
}

//Program to check if array is sorted

function issorted (arr, i){
    if(i == arr.length-1) return true;
    let value = issorted(arr, i+1)
    return value && (arr[i] <= arr[i+1])
 }
 let arr = [5,6,4,3,2]
 console.log(issorted(arr, 0));

 //Friends Pairing Problem
 /**
  * {1},{2},{3} : all single,
{1},{2, 3} : 2 and 3 are paired now but 1 is single,
{1, 2},{3} : 1 and 2 are paired 3 is single,
{1, 3},{2} : 1 and 3 are paired 2 is single,
Here, we need to find how many ways we can divide n elements into multiple groups.
Here group size will be max of two elements.
For n-th person there are two choices:
1. nth person remain single and we recur for f(n-1)
2. nth person pairs-up with any of the remaining (n-1) persons. We get (n-1)*f(n-2).
So, recursively we can write f(n) = f(n-1) + f(n-1) * f(n-2)

  */

function f(n){
    if(n == 1 || n == 2) return n;
    return fib(n-1) + (n+1)*fib(n-2);
}
console.log(f(5));