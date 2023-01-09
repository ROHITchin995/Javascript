/**
 * Subarray with sum 0 – A subarray in a given array having a sum equal to x.
Problem – Given an array having positive and negative numbers. You need to find a number of subarrays having
sum as x.
Approach - We can use hashing concept. Intuition - In our previous problem, the sum of the subarray elements was zero. In this case,
the only difference is that the sum of the subarray elements should be x which can be any number.
Steps –
1) Create a HashMap that contains key= prefix sum (sum of elements up to that index) and value = index. Also, create a variable to
track the current sum and sum of subarray(s)
2) Iterate through the array
3) Track the sum of elements in a variable
4) If sum = s, there is a subarray from index 0 to the current index
5) Verify if key equal to sum-s exists in the hash table, if exists, then there is subarray from (index sum-s to i)
6) Add current sum and index to HashMap

 */

function subArrayWithSum(arr, sum) {
    let n = arr.length;
    let currentSum = 0;
    let start = 0;
    let end = -1;
    let map = new Map();

    for (let i = 0; i < n; i++) {
        currentSum = currentSum + arr[i];
       
        if (currentSum - sum == 0) {
            start = 0;
            end = i;
            break;
        }
       
        if (map.has(currentSum - sum)) {
            start = map.get(currentSum - sum) + 1;
            end = i;
            break;
        }
 
        map.set(currentSum, i);
    }
   
    if (end == -1) {
        console.log("No subarray with given sum exists");
    } 
    else {
        console.log("Subarray having sum between indexes " 
                        + start + " to " + end);
    }

}

    let arr = [2, 4, -1, -2, 4, -5, 5];
    let sum = 6;
    subArrayWithSum(arr,sum);