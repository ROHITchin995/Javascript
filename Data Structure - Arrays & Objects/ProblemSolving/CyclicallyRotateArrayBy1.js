/**
 * Cycle Rotation – Cycle rotation is the rotation in which one rotation moves the last element of an array to the
first place and shifts the remaining elements to the right.
Approach – We can use two pointers like i and j which will point to the first and last elements of an array. We
need to swap i and j till i is not equal to j.
Intuition - Here, we need to keep j fixed and move i to the right direction.

 */

function shiftCyclically(arr, n){
    var i = 0
    var j = n-1
    while(i != j){
        let temp;

        temp = arr[i];
        arr[i] = arr[j];
        arr[j]= temp;
        i =i+1
    }
}

var arr = [1, 2, 3, 4, 5];
var n = arr.length;

console.log("Given array is <br>");
for(var i = 0; i< n; i++)
    console.log(arr[i] + " ");
    
shiftCyclically(arr, n);

console.log("<br> Output array is <br>");
for(var i = 0; i < n; i++)
    console.log(arr[i] + " ");