/**
 * In solar system we have asteroids moving at constant speed. We are given an array that contains the integer values. The
integer value determines the size of the asteroid which is while the sign of the interger determines the direction. Negative
sign indicates it is moving towards left while positive indicates marble moves towards right. You need to find the state of
the asteroid after the collision. In collision the asteroids with the higher size destroys the one with the lower size and the
collision will happen only when they are moving in the same direction.
Sample Input-1:
[11,16,-20]
Output:
[-20]
Explaination:
11 and 16 will not collide with each other as they are moving in same direction, but on collision of 11 and -20, -20 will remain
because of its greater size and on collision of 16 and -20, -20 will remain. Hence the final asteroid will be -20
Sample Input-2:
[5,4,-2]
Output:
[5,4]
Explaination:
-2 on collision with 5 and 4 will get destroyed, while 5 and 4 will never collide as they are moving in the same
direction.
Sample Input-2:
[-5,5]
Output:
[-5,5]
Explaination:
-5 and 5 are travelling in opposite direction right from start, so wont collide
Approach
We will traverse through each asteroid in the asteroid array and for each positive asteroid we will add it to the stack and when a
negative value is encountered we will remove all the asteroids from the stack whose size is less than the abs value of the negative asteroid.
Then simply add it to the result only if the top most value of the stack is not same and is negative. Once the traversing is completedreturn the resultant stack.

 */

function onCollision(asteroids){
    let resultStack = [];
    //Traverse through each asteroid in the array
   asteroids.forEach(x=>{
   //If moving in right direction then store it in stack
    if(x>0)
    resultStack.push(x);
   
    //If found an asteroid moving in the left direction then check for collision
    else{
        //If the stack not empty then keep poping till the time the top most element is less than the size of the current element
       while(resultStack.length!=0 && resultStack[resultStack.length-1]>0
        && resultStack[resultStack.length-1]<Math.abs(x))
        resultStack.pop();
        //Insert the element in the stack only if the last most element is less than 0
        if (resultStack.length == 0 || resultStack[resultStack.length-1] < 0 )
        resultStack.push(x);
        else if(resultStack[resultStack.length-1] == Math.abs(x))
        resultStack.pop();
        }
       
        })
        return resultStack;
       }
       console.log(onCollision([10,2,-5]))