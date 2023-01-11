/**
 * A frog likes to jump from one wall to another. But the only condition is that the next wall should be higher than the
previous one if it is not, then the frog will stop. The stamina needed by the frog to cover the walls is equavilalent to the
xor of the wall height traversed by the frog. Now given the height of the buildings you need to find the maximum stamina
needed, provided the frog starts from any building.
Input-1: 1,2,4,9,5
Output: 15
Explaination:
2^4^9 = 15


 */

function getMaxStamina(n,height){
    let stk=[]
    let compuations = height
    for (let i = n-1;i >-1; i--){
    while (stk.length > 0 && height[stk[stk.length-1]] < height[i])
    stk.pop()
    if (stk.length > 0)
    compuations[i] ^= compuations[stk[stk.length-1]]
    stk.push(i)
    }
    return Math.max(...compuations)
   
   }
   let n=5;
   let height=[1,2,3,8,6]
   console.log(getMaxStamina(n,height))