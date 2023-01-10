/**
 * Reference - https://www.spoj.com/problems/SUBSUMS/
Problem – You will be given an array having N elements. We need to find the number of subsets which will have
a sum between A and B.

Intuition – Here, our main task is to find segments having sum between A and B. To get an optimal solution, we can
use binary search technique here to divide our array and then apply logic to find the solution.
Naive Approach – We can generate all possible subsets and find the subsets having sum between A and B.
Efficient Approach – We can use Binary search to get an optimal solution. Let’s see each step - 
1. Divide the set into 2 subsets [ 0….N/2] and [(N/2+1)….(N-1)]
2. Generate all the subsets sum for above 2 sets.
3. Sort one of the sets and binary search the value which will give the sum for the specific value of another set.
4. Sort second set and for each element present in first set, search for the lower bound of A - S2[i] i.e. low and upper
bound of B - S2[i] i.e.high
5. Subtract high - low to get the final output.
 */


function lowerBound(A, T){
    let N = A.length,
        i = 0,
        j = N;
    while (i < j) {
        let k = Math.floor((i + j) / 2);
        if (A[k] < T)
            i = k + 1;
        else
            j = k;
    }
    return i;
}

   function upperBound(A, T){
    let N = A.length,
        i = 0,
        j = N;
    while (i < j) {
        let k = Math.floor((i + j + 1) / 2);
        if (A[k] <= T)
            i = k;
        else
            j = k - 1;
    }
    return A[j] <= T ? j + 1 : j;
}   

function generateSubsetSumsRecur(arr, st, end, index, runningSum, sums)
{
  if (index == end + 1)
  {
      (sums.push(runningSum) > 0);
      return;
  }
  generateSubsetSumsRecur(arr, st, end, index + 1, runningSum + arr[index], sums);
  generateSubsetSumsRecur(arr, st, end, index + 1, runningSum, sums);
}
function numberOfSubsets(arr, n, a, b)
{
 let lowerBound = (A, T) => {
let N = A.length,
  i = 0,
  j = N;
while (i < j) {
  let k = Math.floor((i + j) / 2);
  if (A[k] < T)
      i = k + 1;
  else
      j = k;
}
return i;
};

let upperBound = (A, T) => {
let N = A.length,
  i = 0,
  j = N;
while (i < j) {
  let k = Math.floor((i + j + 1) / 2);
  if (A[k] <= T)
      i = k;
  else
      j = k - 1;
}
return A[j] <= T ? j + 1 : j;
}; 
  var sums = new Array();
  generateSubsetSumsRecur(arr, 0, parseInt(n / 2), 0, 0, sums);
  var firstSubsetSums = sums.slice(0);
  
  var sums2 = new Array();
  generateSubsetSumsRecur(arr, parseInt(n / 2) + 1, n - 1, parseInt(n / 2) + 1, 0, sums2);
  var secondSubsetSums = sums2.slice(0);
 
  secondSubsetSums.sort(function(a, b) {return a - b;});
  var count = 0;
  for (var i = 0; i < firstSubsetSums.length; i++)
  {
      var p = lowerBound(secondSubsetSums, a-firstSubsetSums[i]) - secondSubsetSums[0];
          var q = upperBound(secondSubsetSums, b-firstSubsetSums[i]) - secondSubsetSums[0];
      count += (q - p);
  }
  return count;
}
function findLastIdxWithFalsePredicate(sums, val, pred)
{
  var min = 0;
  var max = sums.length - 1;
  while (min < max)
  {
      var mid = min + parseInt((max - min + 1) / 2);
      if (pred.test(sums[mid],val))
      {
          max = mid - 1;
      }
       else {
          min = mid;
      }
  }
  if (pred.test(sums[min],val))
  {
      return -1;
  }
  return min;
}

  var N = 3;
  var A = -1;
  var B = 2;
  var arr =
  [1, -2, 3];
  console.log(numberOfSubsets(arr, N, A, B));
