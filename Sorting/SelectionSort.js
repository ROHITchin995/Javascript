/**
 * procedure SelectionSort(int Arr):
 For I = 0 to N - 1 do:
    Smallsub = I
       For J = I + 1 to N - 1 do:
         If A(J) < A(Smallsub)
           Smallsub = J
         End - If
        End - For
    Temp = A(I)
    A(I) = A(Smallsub)
    A(Smallsub) = Temp
End - For
end SelectionSort

 */
function selectionSort(inputArray)
{
    var i, j, minimumIndex;
 
    for (i = 0; i < inputArray.length-1; i++)
    {
        // Initialize the current element as minimumIndex
        minimumIndex = i;
        for (j = i + 1; j < inputArray.length; j++)
        {
            if (inputArray[j] < inputArray[minimumIndex])
            {
                minimumIndex = j;
            }
        }
        // Swap the found minimum element with the current element
        if (minimumIndex != i)
        {
            var temp = inputArray[minimumIndex]
            inputArray[minimumIndex] = inputArray[i]
            inputArray[i] = temp
        }
    }
}