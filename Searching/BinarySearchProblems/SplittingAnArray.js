/**
 * Reference - https://codeforces.com/edu/course/2/lesson/6/3/practice/contest/285083/problem/B
Problem – You will be given an array having N elements and a number K (1<=K<=N). We need to split our array into K
segments such that the maximum sum of the segments is the minimum possible.
Intuition – Our task is to find the minimum of possible maximum sum of all segments. This can be done by keeping
track of the sum and updating it based on the given condition.
Naive Approach – We can check for all possibilities and update our maximum sum. These possibilities can be found
using backtracking which we have already seen in our previous sessions.
Efficient Approach – We can use Binary search to get an optimal solution. Let’s see each step - 
1. In binary search, minimum sum is 1 and maximum sum will be sum of all elements in array
2. Consider mid as maximum segment sum
3. Keep track of count of segments, till their sum is less than mid value.
4. If count is less than or equal to mid value, then mid value is possible else it will not
5. At last, find the minimum possible mid value which satisfies the condition.

 */


function verify(mid, array, n, K)
{
    var count = 0;
    var sum = 0;
    for (var i = 0; i < n; i++) {

     
        if (array[i] > mid)
            return false;

       
        sum += array[i];

        if (sum > mid) {
            count++;
            sum = array[i];
        }
    }
    count++;

   
    if (count <= K)
        return true;
    return false;
}


function splitArray(array, n, K)
{
    var max = array.reduce((a,b)=>Math.max(a,b));
    var start = max;
    var end = 0;

    for (var i = 0; i < n; i++) {
        end += array[i]; 
    }

   
    var answer = 0;
    while (start <= end) {
        var mid = parseInt((start + end) / 2);

      
        if (verify(mid, array, n, K)) {
            answer = mid;
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }

    return answer;
}

var array = [1, 3, 2, 4, 10, 8, 4, 2, 5, 3];
var n = array.length;
var K = 4;
console.log( splitArray(array, n, K));
