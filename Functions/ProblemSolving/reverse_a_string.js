//Create a program to reverse a string.
/**
 * Solution –
Traverse the input string from last index and add each character to a new string. Print the new
reversed string.
 */

function reverseString(string_value){
    let updated_string = "";
    for(let iterator = string_value.length-1; iterator >=0; iterator--){
        updated_string += string_value[iterator]
    }
    return updated_string
}

const input_string = "Coding is Fun"

const output = reverseString(input_string)
console.log(output)