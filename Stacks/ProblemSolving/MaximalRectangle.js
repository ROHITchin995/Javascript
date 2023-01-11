/**
 * Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's
and return its area.
If the height of bars of the histogram is given then the largest area of the histogram can be found. This
way in each row, the largest area of bars of the histogram can be found. To get the largest rectangle
full of 1’s, update the next row with the previous row and find the largest area under the histogram, i.e.
consider each 1’s as filled squares and 0’s with an empty square and consider each row as the base.

Algorithm:
1. Run a loop to traverse through the rows.
2. Now If the current row is not the first row then update the row as follows, if matrix[i][j] is not
zero then matrix[i][j] = matrix[i-1][j] + matrix[i][j].
3. Find the maximum rectangular area under the histogram, consider the ith row as heights of
bars of a histogram.
4. Do the previous two steps for all rows and print the maximum area of all the rows.
 */

function maxHist(R, C, row)
{
let result = [];
let top_val; // Top of stack
let max_area = 0; // Initialize max area in current row (or histogram)
let area = 0; // Initialize area with current top
// Run through all bars of given histogram (or row)
let i = 0;
while (i < C) {
// If this bar is higher than the
// bar on top stack, push it to stack
if (result.length == 0
|| row[result[result.length - 1]] <= row[i]) {
result.push(i++);
}else {
    top_val = row[result[result.length - 1]];
    result.pop();
    area = top_val * i;
    if (result.length > 0) {
    area = top_val * (i - result[result.length - 1] - 1);
    }
    max_area = Math.max(area, max_area);
    }
    }
    while (result.length > 0) {
    top_val = row[result[result.length - 1]];
    result.pop();
    area = top_val * i;
    if (result.length > 0) {
    area = top_val * (i - result[result.length - 1] - 1);
    }max_area = Math.max(area, max_area);
}
return max_area;
}
function maxRectangle(R, C, A)
{
for (let i = 1; i < R; i++) {
for (let j = 0; j < C; j++) {
// if A[i][j] is 1 then
// add A[i -1][j]
if (A[i][j] == 1) {
A[i][j] += A[i - 1][j];
}
}
// Update result if area with current row (as last row of rectangle) is more
result = Math.max(result, maxHist(R, C, A[i]));
}
return result;
}
let R = 4;
let C = 4;
let A = [ [ 0, 1, 1, 0 ],
[ 1, 1, 1, 1 ],
[ 1, 1, 1, 1 ],
[ 1, 1, 0, 0 ] ];
console.log("Area of maximum rectangle is "
+ maxRectangle(R, C, A));
