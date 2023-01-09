/**
 * Find element that occurs once in the array where rest
of the element appear twice
Given an array where every element appears twice leaving one of the element.We need to find the element which
appears once in the array.
Example:
Input: {4,3,5,6,7,7,6,5,3}
Output: 4

First approach: will be two pick one element from the array and search for occurrence of that element leaving the index
of the picked element and if the picked element has a single occurrence then return the picked element.
Time Complexity: O(N^2)
As we will be traversing the array twice ,first for picking the element and second time for searching the same element
leaving the picked element.
Space Complexity: O(1) No extra space is required.

Second approach: will be to create a hash table to store the array elements as key and count of the element as its
value.Traverse the array again and return the element with count one
Time Complexity:O(N)
As we are traversing the array twice,once for storing in hash table and second time for checking the element with count
one,so the complexity will be O(N)
Space Complexity:O(N)
As we are storing array elements in hash table so the space complexity will be O(N)


Best approach: will be to use some properties of XOR which are as follows.
1) XOR of a number with itself returns 0
Eg: 3 XOR 3 = 0
2) XOR of a number with 0 return the number itself
Eg: 3 XOR 0 = 3
If there are elements in pairs in the array leaving one element, if we do the XOR of all the elements present in the array,
pairwise elements will return 0 and the XOR of a single occurrence element with 0 will return the single occurrence
element.

 */

var input = [3,4,5,5,4,2,2,3,1,-1,-1];

function findSingleOccurence(input){
	let ans = 0;
  //store xor of all the elements in ans
  for(let i=0;i<input.length;i++){
  	ans = ans^input[i];
  }
  return ans;
}

let output = findSingleOccurence(input);
console.log(output);





