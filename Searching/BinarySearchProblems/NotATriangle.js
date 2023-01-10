/**
 * Reference - https://www.spoj.com/problems/NOTATRI/
Problem – You will be given a list of numbers ( 1 to N ). Each number is considered as one stick. The ith stick will
be having specific length. We need to play a game in this problem. We need to pick 3 sticks randomly, and if our
opponent is able to form a triangle using those 3 sticks, he will win. Our task is to find the number of ways to
select 3 sticks such that it is not possible for our opponent to form a triangle using them.
Intuition – Here, we need to check if there is any triplet which is not creating any triangle. We can use the triangle
property which says that the sum of two sides should be greater than the third side. We will check its opposite i.e. we
will find triplets in which the sum of 2 numbers is less than the third one.
Naive Approach – Iterate 3 loops and verify that if there is a triplet such that the sum of two numbers is less than the
third number.
Efficient Approach – We can use Binary search to get an optimal solution. Let’s see each step - 
1. Sort the given input array
2. Create a nested loop having first iteration will be from array (0 to n-1) and second iteration will be j (from i+1 to n-1)
3. Take the sum of both elements in a nested loop and check if there any number exists which is greater than sum. If
yes, increase the final count.

 */


function countGreater(arr, n, k)
{
    var l = 0;
    var r = n - 1;
 
   
    var leftGreater = n;
    while (l <= r) {
        var m = l + parseInt((r - l) / 2);
 
        if (arr[m] > k) {
            leftGreater = m;
            r = m - 1;
        }
 
       
        else
            l = m + 1;
    }

    return (n - leftGreater);
}
 
function findTriplet(arr, n)
{
 
    arr.sort((a,b) => a-b);
    var count = 0 ;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (countGreater(arr,n,arr[i]+arr[j]) > 0) {
                count ++;
            }
        }
    }
    
   console.log(count);
}


    let arr = [5, 2, 9, 6 ];
    let n = arr.length;

    findTriplet(arr, n);

