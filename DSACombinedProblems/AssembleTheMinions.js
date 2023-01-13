/**
 * Problem Statement
Gru, the criminal mastermind wants to rob the Deutsche Bank. To do that he hired N minions. The minions randomly
arranged themselves in front of the main gate of the bank but Gru wants all of them to be assembled together. More
precisely consider that the minions are arranged in the x-axis with each minion initially standing at position P. Gru
wants each of the minions to come at the same position.
But Gru is running out of time as the local police will arrive in few minutes. So he does not have the time to go to each
minion and say them to assemble together. So he decided to give a loudspeaker to one of the minions who will make
the announcement. But the loudspeaker has a maximum range of K so after the announcement only those minions
who are at a distance less than K from this minion will come to him.
Given the initial positions of the minions, you have to tell whether it is possible to assemble all the minions or not.

Input Format
First line contains T denoting the number of testcases.
First line of every test case contains two space separated integers N and K denoting the number of minions
and maximum range of the loudspeaker respectively.
Next line contains N space separated integers denoting the initial positions of the minions.
Output Format
Print "YES" if it is possible to assemble all the minions else print "NO"
Constraints
1<=T<=5
2<=N<=105
0<=K<=109
1<=Initial position of minions<=109

Sample Input 1
2
5 2
1 2 3 4 5

5 1
1 2 3 4 5
Sample Output 1
YES
NO

 */

function solve(arr, k){
    arr.sort((a,b)=>a-b)
    for (let i = 0; i < arr.length; i++) {
        let left = arr[i]-k
        let right = arr[i]+k;
        
        if(left <= arr[0] && right >= arr[arr.length-1]){
            return true
        }
    }
    return false
}
console.log(solve([1,2,3,4,5],2));