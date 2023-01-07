//Write a function which will assign object to another variable change of object
//property will not affect the object property of another variable.

const obj = {
    Javascript : 'hard',
    Java : 'easy',
    Python : 'medium'
}

//Destructing the object
const newObj = {...obj};

newObj.Javascript = 'easy'
newObj.Java = 'very easy'
obj.Javascript = 'easy'

console.log(obj);
console.log(newObj);