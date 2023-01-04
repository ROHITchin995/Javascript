// // Find if a given number is an Armstrong number or not.
// Hint : Armstrong number is a number that is equal to the sum of cubes of its digits
// Solution Approach -
// Find all the digits of the number (in our example find the ones, tens and hundreds place digit) and then
// find their cubes and add them to validate against the original number.

let output_value = 0;
const input_value = 153;

let temporary_value = input_value;

while(temporary_value > 0){
    let remainder_value = temporary_value % 10;
    
    output_value += remainder_value * remainder_value * remainder_value;

    temporary_value = parseInt(temporary_value / 10)
}

if(output_value == input_value){
    console.log(`${input_value} is an Armstrong Number`)
}
else{
    console.log(`${input_value} is not an Armstrong Number`)
}