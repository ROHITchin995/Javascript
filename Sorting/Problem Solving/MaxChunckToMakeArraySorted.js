/**
 * Given an array of length n having elements in the range [0,n-1] in any order.We have to split the array into maximum
number of chunks and sort each chunk and concatenate them which should return a complete sorted array.Find the
maximum number of chunks that can be made
Example
Input:[1,0,4,3,2]
Output:2
If we split the array into individual elements the chunk size would be maximum but the array will not be sorted but if we
divide into two chunks [1,0] and [4,3,2] and sort and concatenate it we get [0,1,2,3,4].

Intuition:The idea is to find the maximum number of splitting lines so that elements at the left side of this line are smaller
than the elements at the right side of the line.You consider [1,0,4,3,2],1 original position is at index 1 after sorting and its the
biggest element in the range(0,1) and if we create a partition here,all the elements before the partition are smaller than
elements after the partition.
Approach:Here the idea is to check if an element at i is max of prefix input[0..i],we can create a partition ending with index i
because at i,prefix(input[0..i]) == i and all elements before this point is smaller than or equal to i and all the elements after this
are greater than index i.
Lets take an example and understand this
prefixmax = 0;
[1,0,4,3,2]
At index 0,prefixmax = max(prefixmax,arr[0])=1
At index 1,prefixmax = max(1,arr[1])=1
Here prefixmax == index,at this point all elements before this index are smaller than equal to index and after this point is
greater than index,so we create a partition here
At index 2,prefixmax = max(1,arr[2])=4
At index 3,prefixmax = max(4,arr[3])=4
At index 4,prefixmax = 4
Here also prefixmax==index,now between last partition to this index,all the elements are smaller than or equal to index,so a
partition can be created here
Algorithm:
1)Create a variable to store max in prefix input[0,i]
2)If max is equal to index create a partition

 */

var start = [1,0,4,3,2,5,9,7,8,6];

function maxChunk(s){
	let maxi = 0;
  let n = s.length;
  let ans = 0;
  for(let i=0;i<n;i++){
  	maxi = Math.max(maxi,s[i]);
    if(maxi==i){
    	console.log(maxi);
      ans++;
    }
  }
  return ans;
}

console.log(maxChunk(start));