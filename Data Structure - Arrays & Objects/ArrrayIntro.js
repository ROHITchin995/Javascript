// Declare & Initialize Array
let array_names = ["QPR", "ABD", "IJP", "LOP"]

// Create array to store city names
const cities = ['London', 'Mumbai', 'Chennai', 'Banglore', 'Kerala']

for(let i = 0; i < cities.length-1; i++){
    console.log(cities[i])
}

//Types of Array
//Homogeneous Array
const array = ["Jacob", "John", "Peter"]
const array2 = [27,24,30]

//Heterogeneous Array
const array3 = ["RANDOM", 1889, true, 112]

// Multi-Dimensional Array
const array4 = [["Matthew", "27"], ["Simon", "24"], ["Luke", "30"]]

//Jagged Array
const array5 = [["Matthew", "27", "Developer"], ["Simon", "24"], ["Luke"]]

//Objects
// Creating object using object literal
const laptop = {
    make: "Dell",
    model: "Alienware",
    memory: ['SSD', 'HDD'],
    cores: 8,
    memorySize: [256,512]
};

//Creating Objects using New Keyword
function Fruit(color, taste, seeds) {
    this.color = color;
    this.taste = taste;
    this.seeds = seeds;
}
 
// Create an object
const fruit1 = new Fruit('Yellow', 'Sweet', 1);
console.log(fruit1)
 

//Important Array Methods

//forEach() Loop

const fruits = ['Apple', 'Mango', 'Orange', 'Cherry', 'Banana']

fruits.forEach(printFruits);
function printFruits(element){
    console.log(element)
}

//filter 

function isMillennial(year){
    if(year <=1996){
        return year;
    }
}

let birthYear = [1997, 2000, 1994, 1996, 2005, 1985]
let millennials = birthYear.filter(isMillennial)
console.log(millennials);

//map

let numbers = [1,2,3,4,5]
let cubes = numbers.map(function(val){
    return val*val*val;
})

console.log(cubes);
