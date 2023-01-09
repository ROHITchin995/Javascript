/**
 * Given a string, print all the possible permutations of that string
permutations of a string means generating all possible words that could be formed using the characters in the
provided string
For example:
If the string is AB, possible words would be AB and BA
If the string is ABC, possible combinations would be ABC, ACB, BAC, CAB, BCA, CBA
 */

function permute(str, l, r)
{
if(l === r)
document.write(str+"<br>");
else {
for(let i=1; i <= r; i++)
{
str = swap (str, l, i);
permute(str, l+1, r);
str = swap(str,l,i);
}
}
}
function swap(a,i,j)
{
let temp;
let charArray = a.split("");
temp = charArray[i];
charArray[i] = charArray[j];
charArray[j] = temp;
return (charArray).join("");
}
let str = "ABC";
let n = str.length;
permute(str, 0, n-1)

