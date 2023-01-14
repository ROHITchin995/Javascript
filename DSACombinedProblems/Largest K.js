/**
 * Problem Statement
You are given two integers Q and K. Let's take an array A that is initially empty. 
You have to answer Q of the below query:
· Each query will have an integer V. You have to append V to the array A and then print the sum of K 
largest elements of array A. If the size of A is less than K, just print the sum of all the elements of A.
See sample explanation for more clarity on the question.
Input Format
First-line contains two space-separated integers denoting Q and K.
The next line contains Q space-separated integers denoting the value of V in Q queries.
Output Format
•
Print Q space separated integers. For each query print the sum of K largest elements of array A. 
If the size of A is less than K. just print the sum of all the elements of A.

Constraints
1<=Q<=10^5 
1<=K<=Q 
1<=V<=10^9
Sample Input 1
5 2
5 1 2 4 3
Sample Output 1
5 6 7 9 9
 */

function kLargest(k, q, queries) {
    let sumArr = [];
    let arr = [];
    for (let index = 0; index < q; index++) {   
        let sum = 0;
        arr[index] = queries[index];
        if (index < k) {
            if (index == 0) {
                sum = arr[0]
            } else {
                sum = sumArr[index - 1] + arr[index]
            }
        } else {
            if (index == k) {
                arr.sort()
            } else {
                let currEle = arr[index];
                let correctPos = index;
                //find correct position of current ele 
                for (let i = 0; i < index; i++) {
                    if (arr[i] <= currEle && arr[i + 1] >= currEle) {
                        correctPos = i + 1;
                        break;
                    }
                }
                //place current ele at correct position
                for (let i = index - 1; i > correctPos; i--) {
                    arr[i + 1] = arr[i];

                }
                arr[correctPos] = currEle
            }
            for (let i = index; i >= index - k; i--) {
                sum += arr[i]

            }
        }
        sumArr[index] = sum
    }
    return sumArr
}

let k = 2; 
let q = 5;
let queries = [5, 1, 2, 4, 3];

let result = kLargest(k, q, queries);
console.log(result);