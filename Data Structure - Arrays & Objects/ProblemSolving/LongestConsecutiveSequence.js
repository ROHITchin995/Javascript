/**
 * Longest consecutive sequence – A sequence having elements as consecutive integers. Consecutive integers
can be in any order.
Problem – Given an array. You need to find the length of the longest consecutive sequence such that elements
are consecutive integers. For example –
Input – {35, 3, 4, 88, 9, 10, 21, 5, 6}
Output – 4
Sequence is 3,4,5,6

Naive Approach - We can sort the array and then find the longest consecutive subarray.
Steps –
1) Sort the array
2) Set variables count and max to 0
3) Iterate through the array
4) If the current element is not equal to (previous element + 1), set count to 1 else increment the count
 5) Update max to a maximum of count and max.

 */

 
 function longestConsecutiveSequence(arr, n) {
    let output = 0, count = 0;

    arr.sort(function (a, b) { return a - b; })

    var tempArray = [];
    tempArray.push(arr[0]);

    for (let i = 1; i < n; i++) {
        if (arr[i] != arr[i - 1])
            tempArray.push(arr[i]);
    }
  
    for (let i = 0; i < tempArray.length; i++) {

        
        if (i > 0 && tempArray[i] == tempArray[i - 1] + 1)
            count++;
       
        else
            count = 1;

        output = Math.max(output, count);
    }
    return output;
}



let arr = [35, 3, 4, 88, 9, 10, 21, 5, 6, 7];
let n = arr.length;
console.log(
"Length of the Longest consecutive sequence is "
+longestConsecutiveSequence(arr, n)
);


/**
 * Efficient Approach - We can use hashing concept.
Steps –
1) Create a HashSet and insert all elements into HashSet
2) Iterate through the HashSet
3) Verify if arr[i] – 1 is present in the hash. If not found then this is the first element of the sequence
4) If the current element is the first element of the sequence, iterate from arr[i] + 1 till the last element and
count the number of elements.
5) If count > previous count – update count
6) Add current sum and index to HashMap
 */


function longestConsecutiveSequence(arr, num) {
    let hashSet = new Set();
    let output = 0;

    for (let i = 0; i < num; i++)
        hashSet.add(arr[i]);

  
    for (let i = 0; i < num; i++)
    {
   
        if (!hashSet.has(arr[i] - 1))
        {
        
           
            let j = arr[i];
            while (hashSet.has(j))
                j++;

          
            output = Math.max(output, j - arr[i]);
        }
    }
    return output;
}

// Driver code
let arr2 = [35, 3, 4, 88, 9, 10, 21, 5, 6, 7];
let num = arr.length;
console.log("Length of the Longest consecutive sequence is "
    + longestConsecutiveSequence(arr, num));
    
