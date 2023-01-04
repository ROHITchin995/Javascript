//Create a program to find the largest amongst given 3 numbers

const first_number = 56;
const second_number = 84;
const third_number = 15;
let largest_number;

if(first_number >= second_number && first_number >=third_number){
    largest_number = first_number;
}else if(second_number >= first_number && second_number >= third_number){
    largest_number = second_number 
}
else{
    largest_number = third_number
}

console.log("The largest value of number is " + largest_number)