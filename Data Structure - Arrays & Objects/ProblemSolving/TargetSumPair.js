/**
 * Given an array A with a number x. We need to write a function which takes array A and x as argument and return a pair
from the array A whose sum is equal to x. If no pair exists then return empty array.

 */

/**
 * Approach 1:
This approach will include sorting and two pointer technique. First we will sort the array and then will two pointer technique.
We will take two pointers and put at the begin and the end of the array. Now will iterate and if the sum of the two pointers is
greater then x will decrement the right pointer and if the sum is less than x will increment the left pointer. We will continue
doing this until left pointer is less than right pointer.
Algorithm:
1) Sort the array A in ascending order
2) Initialize two pointers
1) Leftmost index:left = 0,
2) Rightmost index:right = A.length -1;
3) Now wil iterate till l<r and three conditions can be there
1) if A[left]+A[right] less than x,increment left by one.
2) if A[left]+A[right] greater than x,decrement right by one
3) if A[left]+A[right]==x return the pair as an array
4) If no pair exists then return an empty array
 */



var A = [0,1,2,4,-3,-2,5,6];

var x = 10;

function targetSumPair(A,x){
	let left,right;
  let ans = [];
  A.sort();
  left = 0;//start of the array
  right = A.length-1;//end of the array
  while(left<right){
  	if(A[left]+A[right]<x){
    	left++;
    }
    else if(A[left]+A[right]>x){
    right--;
    }else{
    	ans.push(A[left]);
      ans.push(A[right]);
      return ans;
    }
  }
  return ans;
}

var output = targetSumPair(A,x);
console.log(output);

/**
 * Approach 2:
This approach involves hashing concept.We will create a hash table for storing elements in array. We will loop the array
through a pointer curr and search for x- A[curr] in the map and if its present will return this values.
Algorithm:
1) Create an empty hash table m;
2) Create a pointer curr pointing to the start of the array and iterate over the array
1) if(m[x-A[curr]) is set in hash,then return an array [x - A[curr], A[curr] ]
2) If(m[x-A[curr]) is not set in hash,insert A[curr] in hash.
 */



var A = [0,1,2,4,-3,-2,5,6];

var x = 0;

//using hash map to find target sum pair
function targetSumPair(A,x){
	let curr = 0;//pointing to the current element in A
  let rem = 0;
  let ans = [];
  let m = new Set();
  while(curr<A.length){
  	rem = x - A[curr];
    if(m.has(rem)){
    	ans.push(x-A[curr]);
      ans.push(A[curr]);
      return ans;
    }else{
    	m.add(A[curr]);
    }
  	curr++;
  }
  return ans;
}

var output = targetSumPair(A,x);
console.log(output);