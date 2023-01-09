/**
 * Given an array which is unsorted ,we need to sort the array into wave like array where
arr[0]>arr[1]<=arr[2]>=arr[3]<=arr[4]>=arr[5].......
Input:{9,8,7,6,5,21,2,4}
Output:{4,2,6,5,8,7,21,9}
Intuition:
Here,we can see we need to somehow make the element at odd indexes lesser than both the previous even and the next
even index element
and element at even index should be greater than both prev and next odd index element.
Approach:
This problem can be solved easily if we sort the array.So after sorting input array becomes
 {2,4,5,6,7,8,9,21} and now if we swap the adjacent elements the array has the wave like structure
{4,2,6,5,8,7,21,9}
Algorithm:
1)Sort the array
2)Swap the adjacent elements and return the array
 */



var input = [9,8,7,6,5,21,2,4];

function sortwave(input){
	input.sort((a,b)=>a-b);
  let n = input.length;
  if(n>1){
  	for(let i=1;i<n;i+=2){
    	let temp = input[i];
      input[i] = input[i-1];
      input[i-1] = temp;
    }
    return input;
  }
  else{
  	return input;
  }
}
console.log(sortwave(input));


/**
 * Approach 2:
This problem can be solved in O(n) in time complexity if we just maintain the order at odd and even indexes.
Algorithm:
1)Traverse the array from start to second last element
2)if (index%2==0),{
if(arr[index]<arr[index+1]),then swap this elements as we need element at even index greater than odd index
if(arr[index]>=arr[index+1]),then continue as the element at even index is already greater
 }
3)if(index%2==1){
if(arr[index]>arr[index+1]),then swap as we want the element at odd index be smaller than even index element
if(arr[index]<=arr[index+1]),then continue as the element at odd index is smaller than even index
}
 */

var input = [9,8,7,6,5,21,2,4];

function wavesort(inp){
	let n = inp.length-1;
  let temp = 0;
	for(let i=0;i<n;i++){
  	if(i%2==0){
    	if(inp[i]<inp[i+1]){
      	temp = inp[i];
        inp[i] = inp[i+1];
        inp[i+1] = temp;
      }
    }else{
    	if(inp[i]>inp[i+1]){
      	temp = inp[i];
        inp[i] = inp[i+1];
        inp[i+1] = temp;
      }
    }
  }
  return inp;
}

console.log(wavesort(input));