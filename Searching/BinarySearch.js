//Iterative Implementation of Binary Search 
function binarySearch(sortedArray, key){
    let start = 0;
    let end = sortedArray.length - 1;
 
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
 
        if (sortedArray[middle] === key) {
            // found the key
            return middle;
        } else if (sortedArray[middle] < key) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
	// key wasn't found
    return -1;
}

// Recursive Implementation of Binary Search

function binarySearch(sortedArray, key){
    return binarySearchHelper(sortedArray, key, 0, sortedArray.length-1)
 }
  
 function binarySearchHelper(sortedArray, key, start, end){
  
     if(start > end) return -1;
  
     let middle = Math.floor((start + end) / 2);
  
     if (sortedArray[middle] === key) {
         // found the key
         return middle;
     } else if (sortedArray[middle] < key) {
         // continue searching to the right
         binarySearchHelper(sortedArray, key, mid+1, end)
  
     } else {
         // search searching to the left
         binarySearchHelper(sortedArray, key, mid, end-1)
     }
  
  
 }