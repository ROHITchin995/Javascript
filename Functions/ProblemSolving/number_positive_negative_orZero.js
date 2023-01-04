//Switch case
//Create a program to find if the number is positive, negative or zero.

const checked_number = 5
let x = 4

switch(true){
    case (x > 0):
        text = "The number is positive";
        break;
    case (x === 0):
        text = "The number is zero";
        break;
    case (x < 0):
        text = "The number is negative";
        break;
    default:
        text = "No value found"
}
console.log(text)