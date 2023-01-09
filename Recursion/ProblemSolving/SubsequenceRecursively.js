/**
 * SubSequence: May not be contiguous but maintain the relative order.
Elements in the subsequence appear in the same order as they appear in the original array the only difference is that
they may not be contiguous
The recursion tree for the array [1,2,3] is 

 */
function printSubsequences(array, index, result) {
    if (index === array.length) {
      if (result.length > 0) document.write(`[${result}]<br>`);
    } else {
      printSubsequences(array, index + 1, result);
      result.push(array[index]);
      printSubsequences(array, index + 1, result);
      result.pop();
    }
    return;
  }
  
  let array = [1, 2, 3];
  
  let result = new Array();
  
  printSubsequences(array, 0, result);
  