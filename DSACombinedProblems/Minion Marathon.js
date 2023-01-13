/**
 * Problem Statement
Bubu the minion participated in this year's international marathon championships. The marathon consists of K races
ran on a Track of L meters. The track can be considered as a line on the x-axis with one end at x=1, and another end
at x=L. Then minion first runs from x=1 to x=L, then from x=L to x=1, and so on runs along the track K times.
The minion has a stamina of B calories and can store maximum energy of B calories in itself. To run one meter the
minion spends 1 calorie of energy. Initially, the minion is at its full stamina(i.e has B calories of energy).
Now there is a food stall at x=S, where the minion can eat and regain its full stamina(i.e. B calories of energy). You
have to tell the minimum number of times the minion has to eat at the stall to complete K races.

Input Format
First-line contains four space-separated integers denoting L, B, S, and K.

Output Format
Print the minimum number of times the minion has to eat at the stall to complete K races. If it is impossible to
complete the journey print -1.

Constraints
1<L<=10^6
1<=B<=10^9
1<S<L
1<=K<=10^4
Sample Input 1
7 10 3 4

Sample Output 1
2
 */

function minimumRefreshments(L, K, maxCalories, posFoodStall) {
    let dist = L - 1;
    let currCal = maxCalories;
    let distToFoodStall = posFoodStall - 1;
    let distFoodStallToEnd = dist - distToFoodStall;
    let haveRefreshment = 0
    for (let round = 1; round <= K; round++) {
        //can go to foodStall
        if ((currCal - distToFoodStall) < 0) {
            return -1;
        }
        else {
            currCal = currCal - distToFoodStall
        }
        if (round != K) {
            if ((currCal - 2 * distFoodStallToEnd) < 0) {
                haveRefreshment++
                currCal = maxCalories
            }
            else {
                if ((currCal - distFoodStallToEnd < 0)) {
                    haveRefreshment++
                    currCal = maxCalories
                }
            }
        }
        currCal = currCal - distFoodStallToEnd;

        [distToFoodStall, distFoodStallToEnd] = [distFoodStallToEnd, distToFoodStall];
    }
    return haveRefreshment
}


let L = 7;
let K = 4;
let B = 10;
let S = 3;
let result = minimumRefreshments(L, K, B, S);
console.log(result);