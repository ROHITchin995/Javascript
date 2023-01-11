/**
 * 
 * In a given histogram, find the greatest rectangular area that can be made up of a number of
contiguous bars. Assume that all bars are the same width and have a width of one unit.
Find the area of the greatest rectangle in the histogram given n non-negative numbers indicating the
histogram's bar height and the width of each bar being 1.

 */

//Brute-force

function maxAreaHistogramProblem(arrs) {
    let maxAreas = 0;
    for (let i = 0; i < arrs.length; i++) {
    for (let j = i; j < arrs.length; j++) {
    minHeights = Math.min(arrs[i], arrs[j]);
    for (let k = i; k < j; k++) {
    minHeights = Math.min(minHeights, arrs[k]);
    }
    maxAreas = Math.max(maxAreas, minHeights * ((j - i) + 1));
    }
    }
    return maxAreas;
   }
   data = [6, 2, 5, 4, 5, 1, 6];
   console.log(maxAreaHistogramProblem(data));

//Using Stack

function
nearestSmallerToRightProblem(arrs) {
 const stack = new Stack_a();
 const result_array = [];
 for (let i = arrs.length; i >= 0;
i--) {
 if (stack.isEmpty()) {result_array.push(arrs.length);
    stack.push([arrs[i], i]);
    } else if (!stack.isEmpty()) {
    while (!stack.isEmpty() &&
   arrs[i] <= stack.peek()[0]) {
    stack.pop();
    }
    if (stack.isEmpty()) {
   
   result_array.push(arr.length);
    } else {
   
   result_array.push(stack.peek()[1]);
    }
    stack.push([arrs[i], i]);
    }
    }
    result_array.reverse();
    return result_array;
   }
   function
   nearestSmallerToLeftProblem(arrs) {
    const stack = new Stack_a();
    const result_array = [];
    for (let i = 0; i < arrs.length;
   i++) {
    if (stack.isEmpty()) {
    result_array.push(-1);
    stack.push([arrs[i], i]);
    } else if (!stack.isEmpty())
   {while (!stack.isEmpty() &&
    arrs[i] <= stack.peek()[0]) {
     stack.pop();
     }
     if (stack.isEmpty()) {
     result_array.push(-1);
     } else {
    
    result_array.push(stack.peek()[1]);
     }
     stack.push([arrs[i], i]);
     }
     }
     return result_array;
    }function
    max_area_histogramProblem(arrs) {
     const NSLs =
    nearestSmallerToLeftProblem(arrs);
     const NSRs =
    nearestSmallerToRightProblem(arrs);
     const WIDTHs = [];
    
     for (let i = 0; i < arrs.length;
    i++)
     WIDTHs.push(NSRs[i] - NSLs[i]
    - 1);
     const AREAs = []AREAs.push(arrs[i] * WIDTHs[i]);
     return Math.max(...AREAs);
    }
    const data = [6, 2, 5, 4, 5, 1, 6];
    console.log(max_area_histogramProblem(dat
    a));   