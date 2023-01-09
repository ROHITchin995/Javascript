/**
 * Squareful Arrays – An array is known as a squareful array if for every pair of the adjacent numbers, the sum of
numbers is a perfect square.
Squareful Arrays Problem - We need to find several permutations of the input array: squareful arrays.
Example -
Input - [1,17,8]
Output - 2
[1,8,17] and [17,8,1] are 2 squareful arrays

Intuition – Since we need to check all adjacent pair sums when we are at i position, we need to check for i-1 position
and i+1 position number.
Steps -
1. Create a temporary and boolean array that will keep track of visited nodes.
2. Sort the input array.
3. Create a recursive function that will take a sorted input array, a temporary array, and a boolean array
4. If temporary array size is equal to input array, increment the output and return
5. Iterate through the input array
6. If the current number and previous number are equal and the previous number is not visited, then continue
7. Check if the sum is a perfect square; if not, continue.
8. If the current number has already been visited, continue
9. Add the number to the temporary array and mark the visited array as true
10. Call recursive function again to check

 */


output = 0;
function sqaurefulArrays(arr)
{
    arr.sort(function(a, b)
    {
        return a - b;
    });
    this.solve(arr, Array(arr.length).fill(false), new Array());
    return this.output;
}
function solve(arr, visited, temp)
{
    if (temp.length == arr.length)
    {
        this.output++;
        return;
    }
    for (var i = 0; i < arr.length; i++)
    {
        if (i > 0 && arr[i] == arr[i - 1] && !visited[i - 1])
        {
            continue;
        }
        if (visited[i])
        {
            continue;
        }
        if (temp.length > 0)
        {
            var sum = temp[temp.length - 1] + arr[i];
            if (!this.perfectSquare(sum))
            {
                continue;
            }
        }
        visited[i] = true;
        (temp.push(arr[i]) > 0);
        this.solve(arr, visited, temp);
        visited[i] = false;
        temp.splice(temp.length - 1, 1);
    }
}
function perfectSquare(sum)
{
    var sqrt = parseInt(Math.sqrt(sum));
    return sum - (sqrt * sqrt) == 0;
}

arr = [1,17,8];
output = sqaurefulArrays(arr);
console.log(output);
