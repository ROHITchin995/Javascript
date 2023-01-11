/**
 * Given an array arr and an integer K, find the maximum for each and every contiguous subarray of size k.
#180DaysofPurpose
Example:
Input: nums = [1,3,-1,-3,5,3,6,7], K = 3
Output: [3,3,5,5,6,7]
Input: nums = [1, 2, 3, 1, 4, 5, 2, 3, 6], K = 3
Output: [3,3,4,5,5,5,6]


 */
const getWindowMax = function(arr, k) {
    const INDEX = 0, VALUE = 1
    let q = new Deque()
    let result = []
    for(let i = 0; i < arr.length; i++) {
        console.log(`INDEX : ${i}, Window:`, arr.slice(i - k + 1, i + 1), ` and Begin:`)
        q.print()
        console.log(result)

        while (!q.isEmpty() && 
               q.getRear()[VALUE] < arr[i]) q.removeBack();
        
        q.addBack([i, arr[i]])
        
        if (q.getFront()[INDEX] <= i - k) q.removeFront()
        
        if (i >= k-1) result.push(q.getFront()[VALUE])
        
        console.log(`INDEX : ${i} and End:`)
        q.print()
        console.log(result)
    }
    return result
}

const nums = [7, 2, 4], k = 2
