// Sort the one side of the array recursively
const quickSort = (arr, low, high, k) => {
    if (low >= high) {
        return;
    }
    let start = low;
    let end = high;
    const mid = Math.ceil((low + high) / 2);
    const pivot = arr[mid];
    while (start < end) {
        while (arr[start] < pivot) {
            start++;           
        }

        while (arr[end] > pivot) {
            end--;
        }

        if (start <= end) {
            swap(arr, start, end);
            start++;
            end--;
        }
    }

    if (k === pivot){
        quickSort(arr, low, end, k);
        return;
    }
    if (k < pivot){
        quickSort(arr, low, end, k);
    }
    else {
        quickSort(arr, start, high, k);
    }

}

// quick select function to format the input
const quickSelect = (arr, k) => {
    const start = 0;
    const end = arr.length - 1;
    quickSort(arr, start, end, k)
}

// Swapping two index value in an array
const swap = (arr, a, b) =>{
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}


const k = 8;
const unsortedArray = [4, 3, 10, 24, 2, 1, 7, 6, 5]
quickSelect(unsortedArray, k)
console.log(unsortedArray[k - 1])