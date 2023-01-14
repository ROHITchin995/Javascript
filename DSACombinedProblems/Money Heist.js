/**
 * ﻿
Problem Statement
Gru the criminal mastermind wants to rob the Deushet Bank. For the task, he hired N minions 
each having a Loot speed of S dollars/hour. There are V vaults in the Deushet Bank so Gru wants
 to form V teams from the N minions. Also, each vault has L lockers so each team must have at least L minions. 
 Each locker has an unlimited amount of money.
To form the teams he arranged all the minions in a line. Then he chose some minions from the start and
 formed Team 1 from them. Then he chose some minions from the start of the remaining minions and formed 
 Team 2 from then and so on he formed V teams.

After Gru formed the teams, Team 1 went to loot vault 1, Team 2 went to loot vault 2, and so on.

As each vault has L lockers, each team appoints L minions amongst them optimally and sends each of them to 
loot a locker.

Gru and the minions have a time of 1 hour after which the police will arrive. So they want to loot the maximum
 amount of money they can.

Given the initial arrangement of the minions, V, L you have to tell the maximum amount of money Gru and the 
minions can loot if Gru forms the team optimally.


Input Format

First-line contains three space-separated integers N, V, L denoting the number of minions, number of vaults,
 and number of lockers in each vault respectively.
Next line contains N space-separated integers denoting the Loot speed of the minions.

Output Format
Print the maximum amount of money Gru and the minions can loot if Gru forms the team optimally.
Constraints
2<=N<=10^5  
2<=V
1<=L
V*L<=N
1<=S<=10^9

Sample Input 1
9 3 2
2 5 5 4 2 2 3 1 1
Sample Output 1
21   
 */

function maxMoney(N, V, L, speed) {
    speed.sort((a, b) => b - a);
     let totalMoney = 0;
    for (let i = 0; i < V * L; i++) {
        totalMoney = totalMoney + speed[i];
    }
    
    return totalMoney
}
let N = 9;
let V = 3;
let L = 2;
let speed = [2, 5, 5, 4, 2, 2, 3, 1, 1];
let result = maxMoney(N, V, L, speed);
console.log(result);