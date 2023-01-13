/**
 * Question: 1

Richie went to a market selling necklaces . He wanted to d to buy a beautiful necklace for his mother. 
He knew that his mom would become angry if he spent t00 much money on the necklace but he wanted to buy the best necklace for his mother.
 So he decided to buy 2 necklaces and merge them to make the necklace with maximum Beautiness.

 

There are a total of N different necklaces in the market and each necklaces has the same number of stones M. Each stone j in necklace i has
a beautiness value Bi,j. The Beautiness of a single necklace i is the minimum value of min(Bi/, Bi,)...... , BM) . Richie wanted to give his
mother a necklace with maximum Beautiness so he bought 2 necklaces with index ij. The beautiness of the combined necklace is

min( max(Bi ,Bj.1) , max(Bi,2, Bj,2) . max(Bi,M, Bj,M) )
Note that it is possible that isj i.e. Richie bought 2 pieces of the same necklace. Find the maximum value of beautiness that he can achieve.

INPUT FORMAT

First line contains two integers N and M denoting the number of necklaces and the number of stones in each necklace.

Next N lines contains M integers each where ith line denotes the ith Necklace

OUTPUT FORMAT
Print a single integer denoting the maximum value of beautir

 

CONSTRAINTS

1<=N<=2e5
1<=M<=8
1<=Bi,j<=1e9

SAMPLE INPUT

5 4
2 1 8 9
1 4 3 8
1 1 6 2
3 9 9 6
1 7 2 7

SAMPLE OUTPUT
3

EXPLANATION

We can choose necklaces with indices 2 and 4
Beautiness of the resultant necklace = min(max(1,3), max(4,9), max(3,9), max(8,6)) = 3


 */

var n = 5, m = 4
var necklaceData = [[2,1,8,9],[1,4,3,8],[1,1,6,2],[3,9,9,6],[1,7,2,7]]

function checkCombination(i, j){
    let result = Number.MAX_VALUE;
    for (let k = 0; k < m; k++) {
        result = Math.min(result, Math.max(necklaceData[i][k], necklaceData[j][k]))
    }
    return result
}
function findMaxValue(necklaceData, n, m){
    let result = Number.MIN_VALUE;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            result = Math.max(result, checkCombination(i, j))
        }
    }
    return result
}

console.log(findMaxValue(necklaceData, n, m))