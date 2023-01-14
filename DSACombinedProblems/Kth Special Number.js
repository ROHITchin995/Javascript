/**
 * Problem Statement
You are given an array α-a1,a2,...aN of length N, and an integer K.
Let's define a special number is a positive integer that is divisible by all element in the array a.
Your task is to find the Kth special number. It is guaranteed that the answer will always exist
 and in the range [1 10^12].
Constraints
1 <<T<=20
1 <=N<= 3
1<=K <= 10^9
1 <= ai <= 10^12

 */
//Approach 1
let FindkthSpecialNumber = (arr, n) => {
    let j;
    //traverse for all elements
    for (let i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            if (arr[j] % arr[i] > 0) {
                break
            }
        }
        if (j == n) {
            return arr[i]
        }

    }
    return -1
}
let arr = [25, 20, 5, 10, 100];
let n = arr.length;
console.log(FindkthSpecialNumber(arr, n));

//Approach 2

let MinNumber = (arr) => {
    let min = Number.MAX_VALUE;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min
}
let KthSpecialNumber = (arr, n) => {
    let smallest = MinNumber(arr);
    //check if all array elements are divisible smallest 
    for(let i=1;i<n;i++)
    {
        if (arr[i] % smallest > 0) {
            return -1;

        }
    }
    return smallest
}

console.log(KthSpecialNumber(arr, n));

