/**
 * Let us look at the below problem, Nuts & Bolts Problem (Lock & Key problem)
Let's consider a simple example to begin with. If you have a “n”nut and bolt collection of distinct size and each nut has
exactly one matching bolt of the same width,how should we match each nut to its corresponding bolts by comparing
nuts to bolts? Constraint is you should not match nuts with nuts or bolts to bolts.
This is typically a sorting problem. consider the two arrays of n numbers such that one array list is a permutation of the
other.
Here we can you use the Divide and conquer approach
Divide and conquer is nothing but dividing large problems into small problems and then solve each subproblem
independently, finally combining the solutions of small subproblems for a large one.

 */
// Method to print the array
function printArray(arr) 
{ 
    for (let ch = 0 ; ch < arr.length ; ch++)
    { 
        console.log(arr[ch] + " "); 
    }
} 

// Method which works just like quick sort
function matchPairs( nuts, bolts, low,  high) 
{ 
    if (low < high) 
    { 
        // Choose last character of
        // bolts array for nuts partition.
        var pivot = partition(nuts, low, 
                                high, bolts[high]); 

        // Now using the partition of nuts
        // choose that for bolts partition.
        partition(bolts, low, high, nuts[pivot]); 

        // Recur for [low...pivot-1] &
        // [pivot+1...high] for nuts
        // and bolts array.
        matchPairs(nuts, bolts, low, pivot - 1); 
        matchPairs(nuts, bolts, pivot + 1, high); 
    } 
} 

// Similar to standard partition method.
// Here we pass the pivot element too
// instead of choosing it inside the method.
function partition( arr,  low, high,  pivot) 
{ 
    var i = low; 
    var temp1, temp2; 
    for (var j = low; j < high; j++) 
    { 
        if (arr[j] < pivot)
        { 
            temp1 = arr[i]; 
            arr[i] = arr[j]; 
            arr[j] = temp1; 
            i++; 
        } 
        else if(arr[j] == pivot)
        { 
            temp1 = arr[j]; 
            arr[j] = arr[high]; 
            arr[high] = temp1; 
            j--; 
        } 
    } 
    temp2 = arr[i]; 
    arr[i] = arr[high]; 
    arr[high] = temp2; 

    // Return the partition index of an array
    // based on the pivot element of other array.
    return i; 
} 

    // Driver Code

    // Nuts and bolts are represented
    // as array of characters
    var nuts = ['@', '#', '$', '%', '^', '&']; 
    var bolts = ['$', '%', '&', '^', '@', '#']; 

    // Method based on quick sort
    // which matches nuts and bolts
    matchPairs(nuts, bolts, 0, 5); 

    console.log(
    "Matched nuts and bolts are : "
    ); 
    printArray(nuts); 
    printArray(bolts); 
