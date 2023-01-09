/**
 * Given an array of integers we need to find the maximum difference between two consecutive elements when the array is
sorted in ascending order
Example:
Input:[2,4,7,9,1,15]
Output:6
If the array is sorted it would have elements as
[1,2,4,7,9,15] and the maximum difference is (15-9) which is 6.

Approach 1:
The simplest approach for this problems is to sort the array and find the difference between two consecutive
elements of the array and update the maximum storing variable
Algorithm:
1)Sort the array in ascending order
2)Initialize a variable maxi to store maximum difference between two consecutive elements
3)Iterate over the array and update maxi to difference between two elements if its greater than maxi value

 */

var input = [2,4,7,9,1,15];

function maxdiff(input){
	input.sort((a,b)=>a-b);
  let maxi = 0;
  for(let i=1;i<input.length;i++){
  	let diff = input[i]-input[i-1];
    maxi = diff>maxi?diff:maxi;
  }
  return maxi;
}

console.log(maxdiff(input));

/**
 * Intuition:
The main idea behind this approach is to separate the elements in some buckets and we try to find the maximum gap by
finding difference between min in one bucket and max in another bucket.

Now the main problem is how we define the bucket size.We have to define the bucket size such that maximum gap will be
surely larger than a single bucket.For achieving a right bucket size,we iterate through the array to find the total range
 (max(arr)-min(arr))
and use this figure for finding the
 smallest gap value(max(arr)-min(arr))/(arr.length-1).
If we make sure that bucket size is smaller than this gap value,then the numbers forming the maximum gap will have to be in
separate buckets.If there are two numbers,there will be one gap,if there are three numbers there will be two gaps.For sorted
array of n elements there will be n-1 gaps.So if we take n-1 gaps and evenly spread the total distance between them we get
the gap size to be (max(arr)-min(arr))/(arr.length-1).
If any gap becomes smaller than this number,then some other gap must have become larger to make up for the difference in
total gap

Approach 2:
If there are N elements in the array, we find the the min and max value in the array.Then the maximum gap >=
max(arr)-min(arr)/N-1
We take the gap = ceiling[(max - min ) / (N - 1)]. We divide elements in the array into n-1 buckets, where the elements in
buckets are [min,min+gap],[min+gap,mn+2*gap]...............
So the kth bucket would contains elements [min + (k-1)gap, min + k*gap).
We have N-2 numbers which are not equal min or max and we have n-1 buckets, at least one of the buckets will be
empty. We will be creating two arrays interval_min,interval_max to store the min and max value in each bucket and the
max gap can be found by iterating over the array using interval_min[i+1] -interval_max[i].The main logic lies in finding the
number of buckets.
Algorithm:
#180DaysofPurpose
1. Find the max and min element in array
2. Find the value of interval length(gap) = max(arr)-min(arr)/arr.length-1
3. Initialize two new array of size arr.length-1 for storing max and min in each interval
4. Iterate over the array and put max and min value for each interval in the newly created arrays
5. Initialize a variable previous with min(arr)
6. Initialize a variable maxGap = 0;
7. Run a loop from 0 to N-1 to find the difference between min of next bucket and max of current bucket.

 */

var input = [2,4,7,9,1,15];

function maxdiff(input){
  let min = input[0];
  let max = input[0];
  for(let i=0;i<input.length;i++){
  	min = Math.min(input[i],min)
    max = Math.max(input[i],max);
  }
  let n = input.length;
  let gap = Math.ceil((max-min)/(n-1));
  let min_interval = new Array(n-1).fill(Number.MAX_SAFE_INTEGER);
  let max_interval = new Array(n-1).fill(Number.MIN_SAFE_INTEGER);
  for(let i=0;i<n;i++){
  	if(input[i]==min||input[i]==max)
    	continue;
    let idx = Math.ceil((input[i]-min)/gap);
    min_interval[idx] = Math.min(input[i],min_interval[idx]);
    max_interval[idx] = Math.max(input[i],max_interval[idx]);
  }
  let maxGap = 0;
  let previous = min;
  for(let i=0;i<n-1;i++){
  	if(min_interval[i]===Number.MAX_SAFE_INTEGER && max_interval[i]===Number.MIN_SAFE_INTEGER)	
    	continue;
    console.log(min_interval[i]+" "+max_interval[i]);
    maxGap = Math.max(maxGap,min_interval[i]-previous);
    previous = max_interval[i];
  }
  maxGap = Math.max(maxGap,max-previous);
  return maxGap;
}

console.log(maxdiff(input));