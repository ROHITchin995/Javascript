/**
 * There are N bacterias in your petri dish, and their sizes are represented by the array A[i].It is guaranteed that the sizes
of all the bacteria are distinct.The bacterias at indices 1 to M are appointed as the colony leaders and the rest of the
bacterias will join the colonies based on the following rule
The bacteria joins the colony for which the difference between the size of the leader and the size of the
bacteria joining the colony is minimum
If the size difference for two leaders is same for a bacteria, it will join the colony with were the size of the
leader is bigger
What will be the sizes of the colony after formation of colonies
Input Format
The First line contains two space separated integers N and M
The next line contains N space separated integers denoting A[i]
Output Format
Print M space separated integers denoting the sizes of the colony with leader at indices 1,2...M

Constraints
1<=N<=10^5
1<=M<=N
1<=A[i]<=10^9
All A[i] are distinct
Sample Input
6 2
5 1 2 3 4 6
Sample Output
4 2
 */

let m = 3;
let arr = [4,2,8,1,3,5,6,7,9,10,11] 
let leaders = arr.slice(0,m)
let bacters = arr.slice(m)


bacters.sort((a,b)=>a-b)
leaders.sort((a,b)=>a-b)
let colony = {}
for (let i = 0; i < leaders.length; i++) {
    colony[leaders[i]] = 1;
}

// console.log(colony);

let INT_MAX = 10**10;
leaders.push(INT_MAX)

let j = 0;
for (let i = 0; i < bacters.length; i++) {
    while (bacters[i]>leaders[j]) {
        j++
    }

    if(j===0){
        colony[leaders[j]]++;
    }else if(Math.abs(leaders[j-1]-bacters[i])<Math.abs(leaders[j]-bacters[i])){
        colony[leaders[j-1]]++
    }else{
        colony[leaders[j]]++
    }
}

console.log(colony)
for (let i = 0; i < m; i++) {
    console.log(arr[i]);
}   