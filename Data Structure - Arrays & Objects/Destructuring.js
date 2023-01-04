// Array Destructuring
const games = ["Cricket", "Football", "Hockey", "Golf"]
let [game_1, game_2] = games

console.log(game_1); //Cricket
console.log(game_2); //Football

let game_One, game_Two
[game_One, game_Two] = ["Cricket", "Football", "Hockey", "Golf"]

console.log(game_One); //Cricket
console.log(game_Two); //Football

//Object Destructuring

let newAvenger = {realName:"Tony Stark", city:"California", heroName:"Iron Man"};

let {realName, city, heroName} = newAvenger

console.log(realName); //Tony Stark
console.log(city); //California
console.log(heroName); //Iron Man

//Declaring the variables before destructuring assignment
let realName2, city2, heroName2

({realName2, city2, heroName2} = newAvenger)


console.log(realName); //Tony Stark
console.log(city); //California
console.log(heroName); //Iron Man

//Combination of Array and Object Destructuring:

let newAvenger2 = {realName:"Tony Stark", city:["California", "Malibu"], heroName: "Iron Man"};

let {realName:foo, city: bar} = newAvenger2

console.log(foo); //Tony Stark
console.log(bar); //["California", "Malibu"]


//Object Destructuring in Nested Objects:

let newAvenger3 = {
    realName: "Tony Stark",
    location: {
        country:"USA",
        city: "California"
    },
    heroName : "Iron Man"
}

let {
    realName: foo1,
    location :{
        country :bar1,
        city:x
    }
} = newAvenger3

console.log(foo1) //Tony Stark
console.log(bar1) //USA



// Destructuring using Rest

let newAvenger4 = {realName4:"Tony Stark", country:"USA", city4:["California", "Malibu"], heroName: "Iron Man"};

let {realName4 ,country, ...restofDetails} = newAvenger4
console.log(realName4); //Tony Stark
console.log(restofDetails); //heroName: "Iron Man"


//Rest parameters
function getProduct(...input){
    let product = 1;
    for(let item of input){
        product *= item
    }
    return product
}

console.log(getProduct(1,2)); //2
console.log(getProduct(1,2,3,4)); //24

