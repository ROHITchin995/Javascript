// Operators
// Increment & Decrement Operators
let value1 = 10
console.log(a++) // ->10 
console.log(a) // ->11
console.log(a--) // -> 11
console.log(a) //->10
console.log(++a) // ->11
console.log(--a) // ->10

//Unary Operators
// typeof returns data type
// '+' operator convert into number if it isn't a number

let not_a_number = '20'
let not_a_number_string = 'string value'

console.log(+not_a_number) // -> 20
console.log(+not_a_number_string) // -> NaN, cannot convert 'string value' to number

// '!' converts truthy values to falsy & vice-versa

//Falsy Value are 0, On(BigInt), null, undefined, NaN, false, & "" (empty string)

//Arthmetic Operators
let number_one = 10
let number_two = 20

console.log(number_one + number_two) // Addition
console.log(number_one - number_two) // Substraction
console.log(number_one / number_two) // Division
console.log(number_one * number_two) // Multiplication

//Relational Operators
console.log(number_one > number_two) // greater than
console.log(number_one < number_two) // less than
console.log(number_one >= number_two) // greater than or equal to
console.log(number_one <= number_two) // less than or equal to

//Equality Operator
'1' != 1 // -> return false
1 != 1 // -> return false

'1' !== 1 // -> return true
1 !== 1 // -> return false

9 == "9" // return true
9 === "9" // return false

//Assignment Operators
let number_three = 20
console.log(number_three += 10) // => 30
console.log(number_three -= 10) // => 20
console.log(number_three /= 5) // => 4
console.log(number_three *= 5) // => 20





