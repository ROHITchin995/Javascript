/**
 * Problem Given an array. You need to shift negative elements to the end of an array. For example –
Input – { -5, 3, -4, 88, -9, -10, 21, 5, 6}
Output – { 3, 88, 21, 5, 6, -5, -4, -9, -10 }

Approach – We can use temp array to store the values. First store all positive numbers to the temp array and
then negative numbers. Then copy temp array to original array
Intuition - Our main task is to rearrange the numbers in the given array. We can use conditions on elements to
check if they are positive or negative and then apply operations.

 */

function shiftNegativeElements(arr)
{
    let n = arr.length;
    let tempArray= new Array(n);
    let j = 0;
    
    for (let i = 0; i < n ; i++)
        if (arr[i] >= 0 )
            tempArray[j++] = arr[i];
            
    if (j == n || j == 0)
        return;

    for (let i = 0 ; i < n ; i++)
        if (arr[i] < 0)
            tempArray[j++] = arr[i];

   for (let i = 0; i < n ; i++) arr[i] = tempArray[i];
}


let arr= [-5, 3, -4, 88, -9, -10, 21, 5, 6];


shiftNegativeElements(arr);

for (let i = 0; i < arr.length; i++)
console.log(arr[i] + " ");

/**
 * Two-Pointer Approach – This problem can be solved by a two-pointer approach in linear time complexity and
with constant space.
Steps –
1) Create 2 variables - left and right which will hold 0 and n-1 indexes of the given array
2) If the left pointer and right pointer are negative, then decrement the right pointer
3) If the left pointer is negative and the right pointer is positive, then swap the elements.
4) Else if both the pointers are positive, then increment the left pointer.
5) Repeat above steps till left <= right
 */


function rearrange(arr, left, right)
{
	
	while (left <= right)
	{
		if (arr[left] < 0 && arr[right] < 0)
			right -= 1;
		
		else if(arr[left] < 0 && arr[right] > 0)
		{
			let temp = arr[left];
			arr[left] = arr[right];
			arr[right] = temp;
			left += 1;
			right -= 1;
		}
		
		else if (arr[left] > 0 && arr[right] > 0)
			left += 1;
		else
		{
			left += 1;
			right -= 1;
		}
	}
}

function printArray(arr, right)
{
	
	for(let i = 0; i < right; i++)
		console.log(arr[i] + " ");
}

let arr2 = [-5, 3, -4, 88, -9, -10, 21, 5, 6];
let size = arr.length;

rearrange(arr, 0, size - 1);
printArray(arr, size);
