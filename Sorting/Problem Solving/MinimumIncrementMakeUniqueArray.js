/**
 * Given an array of integers.We need to find the minimum number of moves where move is you can choose any element of
array and increment it by 1 to make every element in the array unique
Input:[1,3,3]
Output:After incrementing one of the 3 to four ,all the elements in the array will be unique,so output is 1


Intuition:
We need to make all the duplicate elements present in array to be unique,we need to increment those values.
Approach:
Lets take an example:
[1,1,1,4,6]:Here we will not be processing all the increments of extra 1’s.We will store it and continue processing until we find a
value which is not present in array like 2,3 from which we get the increments to be 2-1,3-1.
Algorithm:
1)Store the count of every element of array
2)We will iterate from 0 to largest value in array +array.length and for each value of x
a)If the count of x>=2,save the duplicates to increment later
b)If there are 0 values of x,then last save duplicate value gets incremented to x
 */

let nums = [3,2,1,2,1,7]

function makeUnique(nums){
let maxVal = 0;
let map1 = {};
for(let i=0;i<nums.length;i++){
	maxVal = Math.max(maxVal,nums[i]);
  if(!map1[nums[i]]){
  	map1[nums[i]]=0;
  }
  map1[nums[i]]++;
}
console.log(map1);
let move = 0;
let taken = 0;
for(let x=0;x<nums.length+maxVal;x++){
	if(map1[x]>=2){
  	taken+=(map1[x]-1);
    move -=x*(map1[x]-1);
  }else if(taken>0 && !map1[x]){
  		taken--;
      move+=x;
  }
}
return move;
}
console.log(makeUnique(nums));