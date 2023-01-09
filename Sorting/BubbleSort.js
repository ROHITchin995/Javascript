/**
 * procedure BubbleSort(int Arr, int size):
    For I = 0 to size - 1
        isSwapped = false
        For J = 0 to size - i -1
            If(A(J) > A(J + 1)
                Temp = A(J)
                A(J) = A(J + 1)
                A(J + 1) = Temp
                isSwapped = true
            End - If
        End - For
        if (not isSwapped) then 
            break
        End - IF
    End - For  
end BubbleSort
 */

function bubbleSort(inputArray) {
    for (var i = 0; i < inputArray.length; i++) {
        var isSwapped = false
        // Last i elements are already sorted
        for (var j = 0; j < (inputArray.length - i - 1); j++) {
            // Check if the current element is greater than the next element
            if (inputArray[j] > inputArray[j + 1]) {
                // If the condition is true then swap them
                var temp = inputArray[j]
                inputArray[j] = inputArray[j + 1]
                inputArray[j + 1] = temp
                isSwapped = true
            }
        }
        if (!isSwapped)
            break
    }
    return inputArray
}