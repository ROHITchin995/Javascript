/**
 * Given a number n. Your task is to generate binary numbers having decimal value from 1 to n

Input - 5

Output - 
1, 10, 11, 100, 101



Approac¥ – Our naive approach could be to use a simple loop from 1 to n and convert decimal to binary
number simply.

We can use the queue to get an efficient solution. We will enqueue 1 to the queue. Then we will dequeue the
first element to get the required element. Lets see each step one by one



Steps Ù

¾ Create empty queue as q
¾ Enqueue the first element which is 1
´¾ terate through a loop from 1 to n
¾ Dequeue the front element and print it
¤¾ Append “0” to the front element and enqueue it
¾ Append “1” to the front element and enqueue it

 */


function generateBinary(n)
{
	var q = [];

	q.push("1");

	while (n--) {

		var s1 = q[0];
		q.shift();
		console.log( s1 );

		var s2 = s1; 

		q.push(s1+"0");

		q.push(s2+"1");
	}
}

var n = 5;
generateBinary(n);
