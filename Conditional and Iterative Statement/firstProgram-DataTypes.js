console.log("Hello World")

//Variables
var num1 = 10
let str1 = 'variable'
const bool = true

//Single line comment
/**
 * multi-line comment
 */

//Data types in Javascript
// returns typeof every console
let a = 10
console.log(typeof a)
let b = 'avengers'
console.log(typeof b)
let c = true
console.log(typeof c)
let d = null
console.log(typeof d)
let e = undefined
console.log(typeof e)
let f = BigInt(9007199254740991)
console.log(typeof f)
let g = Symbol('avengers')
console.log(typeof g)

//Object
let oneObject = {
    num: 10,
    str: 'avengers',
    isOpen: false
}
console.log(typeof oneObject)
//Array is a type of Object
let oneArray = [1, 'assemble', true, {a:1, b:3}]
console.log(typeof b)
//Both above console will return Object

//Numbers
var number = 123 //Integer
var number2 = 212.13456
console.log(number2.toExponential(4)) // to log exponential number

// NaN -> Not a Number

//Infinity
let positiveInfinity = 3/0
console.log(positiveInfinity)

let negativeInfinity = 3/-0
console.log(negativeInfinity)

//Boolean -> true or false

//Null and Undefined
var nullValue = null
var undefinedValue = undefined

//String

var oneString = "Hello World"
var singleQuoteString = 'Hello World'
var backticksString = `Hello World`
var multiLineString = `Hello World
this is multiLine`


