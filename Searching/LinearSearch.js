/**
 * Here we go through all the elements in an array and compare each element with the key. If we find a
match, we return the index of the element. In our case, the variable i keeps track of where we are in
the array, and if we find a match, we return the current value for i.
If the element doesn't exist in our list, the linear search function won't return any i value from the loop.
We just return -1 after the loop to show that the function didn't find the desired element.
 */
function linearSearch(arr, key){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === key){
            return i
        }
    }
    return -1
}

/**
 * In the previous implementation, we return a value after we come across the first
element we are looking for(key). But what if we want to find the indices of all
the occurrences of a given element.
That’s where global linear search comes in. It is a variant of linear search where
we are looking for multiple occurrences of a given element.

 */

function globalLinearSearch(arr, key){
    let results = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === key){
            results.push(i)
        }
    }
    // If results array is empty, return -1
    if(!results){
        return -1
    }
 
    return results
}