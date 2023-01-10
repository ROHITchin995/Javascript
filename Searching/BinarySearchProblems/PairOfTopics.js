/**
 * The aim is to discover the number of pairs of indices {i, j} in two integer arrays A[] and B[] of equal size such that A[i] +
A[j] > B[i] + B[j] and i < j.
The basic technique is to verify if A[i] + A[j] > B[i] + B[j] for all possible pairs of {i, j} in the specified arrays. The concept
of nested loops can be used to do this.

The essential takeaway from the problem is that the stated condition may also be visualised as (ai-bi) + (aj-bj)> 0, which
allows us to create a second array to represent the difference between the two arrays. Let's call this array D. As a
result, the task boils down to finding combinations where Di+Dj>0. Now we can sort the D array, and for each
associated element Di, we'll find the number of suitable pairs Di may form and save that number in a count variable. We
may use the binary search to discover the upper bound of -Di for each element Di to find the number of suitable pairs it
can make. All elements present after -Di will also make sense because the array is sorted. Because the array is sorted,
all elements after -Di will make good pairs for Di. As a result, if the upper bound of -Di is x and the entire size of the
array is n, the total number of pairs corresponding to Di is n-x. This method takes O(NlogN) time to complete.
• The given condition in the question can be rewritten as: 
A[i] + A[j] > B[i] + B[j]
A[i] + A[j] - B[i] - B[j] > 0
(A[i] - B[i]) + (A[j] - B[j]) > 0
• Create a new array, D, to hold the difference between the elements in both arrays at the relevant index, i.e.
D[i] = A[i] - B[i]
• Sort the difference array D so that each element i is smaller than the ones to its right to ensure that the constraint i <
j is satisfied.
• If the value in the difference array D is negative at index i all we have to do is identify the nearest place 'j' where the
value is just more than -D[i], such that the value sums to greater than 0.
• Because the array is sorted, the Binary Search can be used to identify such index 'j'.
 */

// Javascript program to find the number of indices pair
// such that pair sum from first Array
// is greater than second Array
 
 
// Function to get the number of pairs of indices
// {i, j} in the given two arrays A and B such that
// A[i] + A[j] > B[i] + B[j]
function getPairs(A, B, n)
{
    // Initializing the difference array D
    let D = new Array(n);
 
    // Computing the difference between the
    // elements at every index and storing
    // it in the array D
    for (let i = 0; i < n; i++) {
        D[i] = A[i] - B[i];
    }
 
    // Sort the array D
    D.sort((a, b) => a - b);
 
    // Variable to store the total
    // number of pairs that satisfy
    // the given condition
    let total = 0;
 
    // Loop to iterate through the difference
    // array D and find the total number
    // of pairs of indices that follow the
    // given condition
    for (let i = n - 1; i >= 0; i--) {
 
        // If the value at the index i is positive,
        // then it remains positive for any pairs
        // with j such that j > i.
        if (D[i] > 0) {
            total += n - i - 1;
        }
 
        // If the value at that index is negative
        // then we need to find the index of the
        // value just greater than -D[i]
        else {
            let k = binary_search(D, 0, D.length, -D[i])
            total += n - k;
        }
    }
    return total;
}
 
function binary_search(a, low, high, element)
{
    while(low < high){
        let middle = low +  Math.floor((high - low)/2);
        if(a[middle] > element)
            high = middle;
        else
            low = middle + 1;
    }
    return low;
}