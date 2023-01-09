/**
 * Given an array A with a number x. We need to write a function which takes array A and x as argument and return a triplet
from the array A whose sum is equal to x. If no pair exists then return empty array
 */

/**
 * Approach 1:
This approach uses sorting and two pointer technique.We will be traversing through the array by a pointer i which fix
the first element of triplet. Then will use two pointer technique to find a pair in the remaining array whose sum is x - A[i].
Here the starting pointer will be i+1 and end will the right most index of array
Algorithm:
1) Sort the array A in ascending order
2) Will loop over the array and choose the first element of the triplet, A[i]
3) We will then create two pointers one pointing to i+1 and the second one at A.length-1
a) If the sum of two pointers is less than x-A[i], increment the left pointer
b) If the sum of two pointers is greater than x-A[i], decrement the right pointer
c) If the sum of two pointers is equal to x, return the triplet as an array
 */



var A = [0,1,2,4,-3,-2,5,6];

var x = 11;

//using sorting and two pointer technique to find Triplet
function targetSumTriplet(A,x){
	A.sort((x,y)=>(x-y));//sort the array
  let ans = [];
  for(let i=0;i<A.length-2;i++){
  	let left = i+1;//pointer after fixing first elemenet
    let right = A.length-1;//pointer to the last element of array
    while(left<right){
      if(A[i]+A[left]+A[right]<x){
      	left++;
      }else if(A[i]+A[left]+A[right]>x){
      	right--;
      }else{
      	ans.push(A[i]);
        ans.push(A[left]);
        ans.push(A[right]);
        return ans;
      }
    }
  }
  return ans;
}

var output = targetSumTriplet(A,x);
console.log(output);

/**
 * Approach 2:
This approach uses hashing based algo.We will be traversing through the array by a pointer i fixing our first element
and then will run a loop from i+1 to A.length by a pointer j.I n the second loop we will create a hashmap to store
elements from i+1 to j-1. and search for x-A[i]-A[j]. If it’s there then will return the array with the triplet
Algorithm:
1) Loop the array from start to end by counter i
2) Create a hashmap to store elements
3) Run second loop from i+1 to A.length
1) If the value x-A[i]-A[j] is set then will return an array with elements A[i], A[j], x-A[i]-A[j]
2) Insert the A[j] element in set
 */



var A = [0,1,2,4,-3,-2,5,6];

var x = 11;

//using hash table  to find Triplet
function targetSumTriplet(A,x){
  let ans = [];
  //fixing the firt element as A[i]
  for(let i=0;i<A.length-2;i++){
  	let m = new Set();
    //finding pair in array[i+1,A.length-1]
  	for(let j=i+1;j<A.length;j++){
      let rem = x-A[i]-A[j];
      if(m.has(rem)){
      	ans.push(A[i]);
        ans.push(A[j]);
        ans.push(x-A[i]-A[j]);
        return ans;
      }else{
      	m.add(A[j]);
      }
    }
  }
  return ans;
}

var output = targetSumTriplet(A,x);
console.log(output);