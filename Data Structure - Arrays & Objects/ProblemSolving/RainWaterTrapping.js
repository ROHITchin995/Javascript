/**
 * Given an array of non negative integers representing the height of each block where
the width of each block is 1, we need to find out maximum rain water that can be
trapped using blocks.
 */

/**
 * Approach 1:
We will traverse the array from start to end and for each element will find the highest bars on left of this element and right of
this element. So the amount of water it can store will be the minimum of left and right height blocks-height of the current
block
Algorithm:
1) Traverse the array from beginning to end
2) For each element iterate the array from start to present element and find the highest block in left,similarly start from
current element index to end and find the highest block in right
3) The amount of water that can be current stored for current block is min(left,right)-current block height
4) We will have a variable to store the sum of water for all the elements of array

 */
var input = [3,0,2,0,4]

function trapWater(input){
	let ans = 0;//max water to be stored
  for(let i=1;i<input.length-1;i++){
  	let left = input[i];//highest block on left
    for(let j=0;j<i;j++){
    	left = Math.max(left,input[j]);
    }
    let right = input[i];//highest block on right
    for(let j=i+1;j<input.length;j++){
    	right = Math.max(right,input[j]);
    }
    ans+=Math.min(left,right)-input[i];
  }
  return ans;
}

var output = trapWater(input);
console.log(output);

/**
 * Approach 2:
Upper mentioned approach’s time complexity can be reduced if we can precompute the left and right element for every
element of the array which will require extra space but time complexity will be reduced. We will create two array for storing
the left and right values and use it for computation.
 */

var input = [3,0,2,0,4]

function trapWater(input){
	let ans = 0;//max water to be stored
  let n = input.length;
  let left = new Array(n);//precompute left highest block
  let right = new Array(n);//precompute right highest block
  
  left[0] = input[0];
  right[n-1] = input[n-1];
  for(let i=1;i<n;i++){
  	left[i] = Math.max(input[i],left[i-1]);
  }
  for(let i=n-2;i>=0;i--){
  	right[i] = Math.max(input[i],right[i+1]);
  }
  for(let i=0;i<n;i++){
    ans+=Math.min(left[i],right[i])-input[i];
  }
  return ans;
}

var output = trapWater(input);
console.log(output);

/**
 * Approach 3:
We can reduce the space complexity by using two variables to store the left maximum and right maximum upto that
point
Algorithm:
1) Take two pointers lo and hi,lo pointing to the start of array and hi pointing to the end of array
2) Create two variables max_left and max_right for storing max left and max right block.
3) While lo<hi
1) if input[lo]<input[hi] update max_left,res and increment lo by one
2) if input[lo]>=input[hi] update max_right,res and decrement hi by one
4) Return the result

 */

var input = [3,0,2,0,4]

function trapWater(input){
	let ans = 0;//max water to be stored
  let n = input.length;
  let max_left = 0;
  let max_right = 0;
  let lo = 0;
  let hi = n-1;
  while(lo<hi){
  	if(input[lo]<input[hi]){
    	if(max_left<input[lo])
      	max_left = input[lo];
      ans += max_left-input[lo];
      lo++;
    }else{
    	if(max_right<input[hi])
      	max_right = input[hi];
      ans+=max_right-input[hi];
      hi--;
    }
  }
  return ans;
}

var output = trapWater(input);
console.log(output);

