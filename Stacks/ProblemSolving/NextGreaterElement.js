/**
 * Ganesh is in a line, and the tall man in front of him is obstructing his view, which irritates
him.
Ganesh now wants to know how tall the tall person in front of him is.
Ganesh wants to find a general solution, thus he wants to find the height of the person
who is nearer to that person and obstruct the view for each individual.
He prints 0 for the final person or if no one is taller.
This is nothing but we need to find the next greater element for each element in the array

Brute Force Approach
Two nested loops are used in this example.
Each array element is traversed from left to right in the outer loop. All elements to the "right" of the
element specified by the outer loop are considered by the inner loop. Terminate the inner loop as
soon as the first larger element is discovered, which will be the next greater element for the outer
loop's element.


 */

let nextGreater_array = (arrs, num = arrs.length) => {
    for(let start = 0; start< num; start++){
    let next_ele = -1;
   
    for(let j = start; j < num; j++){
    if(arrs[start] < arrs[j]){
    next_ele = arrs[j];
    break;}
}

console.log(next_ele);
}
}
nextGreater_array([11, 13, 21, 3]);
// Output: 13,21, -1, 1

//Using stack
const getNextGreater = function(nums) {
    const INDEX = 0, NUMBER = 1
    let stk = new Stack()
    let result = new Array(nums.length)
    
    for(let i = 0; i < nums.length; i++) { // O(n)
        console.log(stk.data)
        while( !stk.isEmpty() &&
                stk.peek()[NUMBER] < nums[i]) {
            result[stk.pop()[INDEX]] = nums[i] // O(n)
        }
        stk.push([i, nums[i]])
    }

    console.log(stk.data)
    
    while(!stk.isEmpty()) {
        result[stk.pop()[INDEX]] = -1
    }

    return result
}

/**
 * let nextGreaterWithStackArray = (arrs,
num = arrs.length) => {
 let next_ele, elements;
let stack_data = new Stack_a();

 stack_data.push(arrs[0]);

 for(let start = 0; start < num;
start++){
 next_ele = arrs[start];
 if(!stack_data.isEmpty()){
 elements = stack_data.pop();


 while(elements < next_ele){
 console.log(next_ele);
 if(stack_data.isEmpty()){
 break;
 }

 elements = stack_data.pop();
 }

 if(elements > next_ele){
 stack_data.push(elements)
 }
 }elements = stack_data.pop();
 }

 if(elements > next_ele){
 stack_data.push(elements)
 }
 }

 stack_data.push(next_ele);
 }
while(!stack_data.isEmpty()){
 elements = stack_data.pop();
 next_ele = 0;
 console.log(next_ele);
 }
}
 */

let nums = [71, 55, 82, 55]
// console.log(`The next greater elements for 
// ${nums} are 
// ${getNextGreater(nums)}`)

