//Pass by Value
function passByValue(value){
    return (10 + value) //Adding the value with 10
}

const num = 99
console.log('num before passByValue function call', num);

const pbv = passByValue(num)

console.log('num after passByValue function call', num);
console.log('result after passByValue function call', pbv);

// ---------------------------------------------------------------------------------------------


//pass by Reference

//function declaration
function passByReference(arr, value){
    arr.push(value)
    console.log('************ Console array into pass by reference**********');
    console.log(arr);
}
// Declaring array and add 'pass' string in the array
const arr = ['pass']

//logging array before pass by reference
console.log('************ Console array before pass by reference**********');
console.log(arr);

//calling function passByReference with two argument -> array & string
passByReference(arr, 'by Reference')

//logging the array after pass by reference
console.log('************ Console array after pass by reference**********');
console.log(arr);

// ---------------------------------------------------------------------------------------------

//Pure Function
var number = 5;

//function
const pureFunction = (num1, num2)=>{
    return num1 + num2
}

//always returns same result given same inputs
const result1 = pureFunction(4, number)
console.log(result1);
//9
const result2 = pureFunction(number, 4)
console.log(result2);

// ---------------------------------------------------------------------------------------------

//Impure Function
let mutateNum = 0;

const impureFunction = (num) =>{
    return (mutateNum += num);
}

//returns different result given same inputs
const result3 = impureFunction(5)
console.log(result3);
//5
const result5 = impureFunction(5)
console.log(result5);
//10
console.log('mutateNum', mutateNum);

// ---------------------------------------------------------------------------------------------

//Closure function

function counter(){
    let count = 0;

    return function (value){
        count+= value
        console.log(count);
    }
}

const counterCall = counter()
counterCall(1);
counterCall(2);
counterCall(3);

//Closure using SetTimeout

for(var i=0; i<4; i++){
    setTimeout(function (){
        console.log(i);
    }, i*1000)
}

//Answer: 4 4 4 4

for(let i=0; i<4; i++){
    setTimeout(function(){
        console.log(i);
    }, i*1000)
}

// 0 1 2 3



// ---------------------------------------------------------------------------------------------

// Higher Order Function
const arr1 = [1, 2, 3, 4, 5]

//Filter the Array
const filteredArr = arr.filter(function(item){
    return item > 3
})
console.log(filteredArr);

//Sort the array in descending order
arr.sort(function(a,b){
    return b-a
})

console.log(arr);

// ---------------------------------------------------------------------------------------------
//Composability

const add = (a,b)=> a + b;
const mult = (a,b)=> a * b;
add(2, mult(3,5))

// ---------------------------------------------------------------------------------------------

//Currying
//Ordinary function for addition using 3 arguments
const addTheNumbers = (a, b, c)=>{
    return (a + b + c)
}

addTheNumbers(1, 2, 3);

//Currying function for addition
const curryAdd = (sum) =>{
    return (a) =>{
        return (b)=>{
            return (c)=>{
                return sum(a, b, c);
            }
        }
    }
}
const additionResult = curryAdd(addTheNumbers);
console.log(additionResult(1)(2)(3));
// ---------------------------------------------------------------------------------------------

//Anonymous Function
var myFunc = function(){
    console.log('Anonymous Function')
}
myFunc()

//Use of Anonymous Function
setTimeout(function(){
    console.log('function called')
},1000)

//Anonymous functions using Immediately Invoked Function Expression (IIFE)
(function(text){
    console.log(text)
}('function called'))

//Anonymous functions used for creating function expressions

let myFunction = function (text){
    console.log('Inside function expression');
}

// ---------------------------------------------------------------------------------------------
//Arrow Function
  //Traditional Function

function addTwoNumberTraditional (a, b){
    return (a + b)
}

//Arrow function
const addTwoNumberArrow = (a, b)=>{
    return (a + b);
}

console.log(addTwoNumberTraditional(1,2));

console.log(addTwoNumberArrow(1,2));
// ---------------------------------------------------------------------------------------------

// Function - A first class citizen. It can stored in variable, passed as an argument, return as result

// Storing function in a variable
const addNumber = (a, b) =>{
    return (a + b)
}

const addition = addNumber;
addNumber(1,2)
addition(1,2)

//passing function as an argument
const pass = (func) =>{
    return func(1,2)
}

pass(addNumber)

// Return function as result
const funcReturn = (a, b)=>{
    return ()=>{
        console.log(a + b + 5);
    }
}

funcReturn(1,3)()

// ---------------------------------------------------------------------------------------------
//IIFE (Immediately Invoked Function Expression)
(()=>{
    console.log('Immediately Invoked Function Expression');
})()

