/**
 * Given there are N seats and N students in a room.An array seat of length is given where seat[i] is the position of ith seat and
also an array of students of length n is given where stud[i] is the position of ith student.
We can perform the following move any number of times.
Increase or decrease the position of ith student(moving position of ith student from position j to j+1 or j-1)
We need to find the minimum number of moves required to move each student to a seat so that no two students share same
seat.
Example: seat = [2,1,5]
 stud = [2,7,4]
Output:5

Intuition:
We have to arrange in a way where the student having the smallest positioned chair will acquire the smallest position
seat and the next student will acquire the next smallest position seat
Approach:
We can sort the students and seat array in ascending order and will find the minimum move the student has to move
in order to occupy the positioned seat.
Algorithm:
1)Sort the two array
2)Initialize a variable counter to store the min moves made by each student to occupy the seat
3)Iterate over the array and increase the value of
counter by abs(seat[i]-stud[i]) for each index.

 */


let seat = [2,1,5];
let stud = [2,7,4];


function arrange(seat,stud){
	seat.sort((a,b)=>a-b);
  stud.sort((a,b)=>a-b);
  let counter = 0;
  for(let i=0;i<seat.length;i++){
  	counter+=Math.abs(seat[i]-stud[i]);
  }
  return counter;
}

console.log(arrange(seat,stud));