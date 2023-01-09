/**
 * Given an array of integers and we need to find all the pairs in the array which have the minimum absolute difference
and return the array
Example:
Input: [3,4,5,5,4,2,2,3,1,-1,-1];
Output: [ [-1,-1], [2,2], [3,3], [4,4], [5,5] ]

 */
var input = [3,4,5,5,4,2,2,3,1,-1,-1];

var minimumAbsDifference = function(arr) {
    arr.sort((a,b)=>a-b);
    let ans = [];
    let diff = Number.MAX_SAFE_INTEGER;
    for(let i=1;i<arr.length;i++){
        let abso = Math.abs(arr[i]-arr[i-1]);
        if(diff>abso){
            diff = abso;
            ans.length = 0;   
        }
        if(diff==abso){
            ans.push([arr[i-1],arr[i]])
        }
    }
    return ans;
};

let output = minimumAbsDifference(input);
console.log(output);