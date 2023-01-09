/**
 * procedure INSERTION-SORT(A)
   for i = 1 to n
        key = A [i]
        j = – 1
        while j > = 0 and A[j] > key
            A[j+1]  = A[j]
            j = j – 1
        End while 
        A[j+1] = key
   End for 
end INSERTION-SORT
 */
function insertionSort(inputArr) {
    let n = inputArr.length;
    for (let i = 1; i < n; i++) {
        // Choosing the first element of the unsorted array
        let current = inputArr[i];
        // The last element of our sorted subarray
        let j = i - 1;
 
        // Find the position of the element in the sorted subarray
        while ((j > -1) && (current < inputArr[j])) {
            inputArr[j + 1] = inputArr[j];
            j--;
        }
 
        inputArr[j + 1] = current;
    }
    return inputArr;
}