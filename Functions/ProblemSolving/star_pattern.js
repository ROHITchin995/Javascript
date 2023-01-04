/**
 * Create a pattern using ‘*’ as shown below using loops.
*
**
***
****
*****
 */

let number_of_rows = 5;
let star_string = "";

for(let row = 0; row < number_of_rows; row++){
    for(let column = 0; column <= row; column++){
        star_string += "*"
    }
    star_string += "\n"
}
console.log(star_string)


//Create a pattern using ‘*’ as shown below using loops
//        *
//       ***
//      *****
//     *******
//    *********

number_of_rows = 5;
output_string = "";

for(let row_first = 1; row_first <= number_of_rows; row_first++){
    for(let columns = number_of_rows; columns > row_first; columns--){
        output_string += " ";
    }
    for(let space_bet = 0; space_bet <row_first * 2 - 1; space_bet++){
        output_string += "*"
    }
    output_string += "/n"
}