//Create a program to get sum of all digits of a number.

function generateSumOfDigits(number_passed){
    var output = 0;
    while(number_passed !=0){
        output = output + number_passed % 10;
        number_passed = parseInt(number_passed / 10);
    }
    return output
}

var value = 687
console.log(generateSumOfDigits(value))