//Write a program array containing string and sort the string array in descending 
//order. (Input array: [‘a’, ‘b’, ‘c’, ‘z’, ‘h’]
const arr = ['a', 'b', 'c', 'z', 'h']
arr.sort((a, b) => b.localeCompare(a));
console.log(arr)