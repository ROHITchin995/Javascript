/**
 * Given a string S made up of characters `a` abd `b`. You need to count the minimum deletion needed to make the string balanced.
A string is said to be balanced only if there doesnt exists a pair (i,j) where i<j and s[i]=’b’ and s[j]=’a’
Example Input-1
aababbab
Output:
2
Explaination:
On removing the element at position 3 and 6 then the balanced string will be aabbbb and count 2
Approach:
Transverse throught the list of element in reverse order and for each position where a is placed left of b remove it.
1. Traverse through the element in reverse order
2. If the element is first element then put it in stackand continue
3. Check if the current element is b and the top of the stack is a, if yes then remove the top most element and
increment the counter, else push the element in stack

 */

function deletionsCount(s){
    let res = [];
    let count = 0;
    for(let idx=s.length-1;idx>0;idx--){
    if(res.length==0){
    res.push(s.charAt(idx));
    }
    else if(res[res.length-1]=='a' && s.charAt(idx)=='b')
    {
    count+=1;
    res.pop();
    }
    else{
    res.push(s.charAt(idx));
    }
    }
    return count;
   }
   console.log(deletionsCount("baaabbba"))