/**
 * Given an number N, the task is to print all the numbers from 1 to N in lexicographical order.
Input N = 14
Output: 1 10 11 12 13 14 2 3 4 5 6 7 8 9
Input: N = 19
Output: 1 10 11 12 13 14 15 16 17 18 19 2 3 4 5 6 7 8 9
Input N= 15
Output: 1 10 11 12 13 14 15 2 3 4 5 6 7 8 9
 */

function lexNumbers(n)
{
    var sol = [];
    dfs(1, n, sol);
    document.write("["+ sol[0]);
    for (var i = 1; i < sol.length; i++)
       document.write(", "+ sol[i]);
    document.write("]");
}
 
function dfs(temp, n, sol)
{
    if (temp > n)
        return;
    sol.push(temp);
    dfs(temp * 10, n, sol);
    if (temp % 10 != 9)
        dfs(temp + 1, n, sol);
}
 
var n = 15;
lexNumbers(n);
 