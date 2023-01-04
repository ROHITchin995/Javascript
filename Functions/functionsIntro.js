// Declare a function
function greet(){
    console.log("Hello");
}

//function with parameter and return value
function square(number){
    return number * number
}

//function call
greet()
var result = square(2)

//function Expression -> not hoisted
let sayHi = function(){
    console.log('Hi')
}

sayHi()


//function hoisting
add(2,3)

function add(a,b){
    console.log(a + b)
}


