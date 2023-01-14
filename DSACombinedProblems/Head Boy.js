/**
 * Problem Statement
Varun and Arijit are competing for head boy of the school. There are N classes in the school where 
each class consist of the following -
- Ai loyal Arijit voters
- Viloyal Varun voters
If Varun goes for a campaign at a class, all the loyal Varun voters and loyal Arijit voters vote for Varun. 
And if he doesn't go for a campaign at a class, all loyal Arijit voters will vote for Arijit, however Varun 
voters won't vote for anyone. Since Varun is short on time, can you determine the minimum number of classes 
should Varun go for a campaign such that he wins the head boy election.
Constraints:
• 1 <= N 2*10^5
● 1 <= Ai <= 10^9
•
1 <= Vi <= 10^9
• Time limit for this problem will be 2 seconds.

Input Format:
The first line contains an integer N denoting the number of classes.
• Next N lines contain two space separated integers Ai and Vi respectively.
Output Format:
Print the minimum number of classes where Varun needs to go for a campaign.
Sample Input:
4
1 2
5 1
2 1
2 3
Sample Output:
1
 */

function minClasses(voters) {
    let arijitTotalVotes = 0;
    let helperArray = [];
    for (let i = 0; i < voters.length; i++) {
        arijitTotalVotes = arijitTotalVotes + voters[i][0];
        //arijit's voters, varun's voters, max votes for Varun let maxVotes FromCurrentClass = voters[i][]
        let maxVotesFromCurrentClass = voters[i][0] + voters[i][1]
        let ele = [voters[i][0], voters[i][1], maxVotesFromCurrentClass]
        helperArray.push(ele)

    }
    helperArray.sort((a,b)=> b[2]- a[2])
    let minimumClases  = 0;
    let varunTotalVotes = 0;
    for (let i = 0; i < helperArray.length; i++) {
        minimumClases++
        varunTotalVotes = varunTotalVotes + helperArray[i][2]
        arijitTotalVotes = arijitTotalVotes - helperArray[i][0]
        if(varunTotalVotes > arijitTotalVotes){
            return minimumClases
        }
    }
}

let voters = [
    [1, 2],
    [5, 1],
    [2, 1],]

console.log(minClasses(voters));
