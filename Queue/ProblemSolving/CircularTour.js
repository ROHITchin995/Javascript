/**
 * Problem Statement - Given a circle where many petrol pumps are installed. Also, the amount of petrol at
each petrol pump and the distance between them is given. Your task is to find the first point in the circle
where a truck can complete its first circle.


Assume that truck can cover 1 unit of distance with 1 liter of petrol



Input - (4,6), (6,5), (7,3), (4,5)


Above example shows that there are 4 petrol pumps in a circle, where the first number indicates the amount
of petrol and the second number indicates distance from the next petrol pump.


Output - (6,5) 
Approaci - We will uMe a queue here to implement thiM Molution? We will enqueue the petrol pump till we have
Mufficient petrol to complete the tour? If we have negative petrol, then we will dequeue them till the amount of
petrol becomeM zero?



Steps - X
H> Initialize two pointerM Mtart and end with 0 and ,X
+> Curr_petrol I current pump petrol value - current pump diMtance valueX
L> Iterate through a loop till we reach our firMt petrol pump again with either 0 or more amount of petrolX
*> Iterate till curr_petrol < 0 and Mtart !I end -> update Mtart to the ne&t and update curr_petrol X
h> If Mtart I 0, no MolutionX
%> End loop Mtep 4X
)> #pdate curr_petrolX
"> #pdate end pointerX
!> End loop Mtep 3X
H > Return the Mtart pointer


Time Complexity –


If number of petrol pumpM iM n, then time comple&ity will be O(n) 

 */
	class petrolStation {
		constructor(petrol, distance) {
			this.petrol = petrol;
			this.distance = distance;
		}
	};

	const print = (arr, n) => {
	
		let start = 0;
		let end = 1;

		let curr_petrol = arr[start].petrol - arr[start].distance;

		while (end != start || curr_petrol < 0) {

			while (curr_petrol < 0 && start != end) {
				curr_petrol -= arr[start].petrol - arr[start].distance;
				start = (start + 1) % n;

				if (start == 0)
					return -1;
			}

			curr_petrol += arr[end].petrol - arr[end].distance;

			end = (end + 1) % n;
		}

		return start;
	}


	let arr = [new petrolStation(6, 4), new petrolStation(3, 6), new petrolStation(7, 3)];
	let n = arr.length;
	let start = print(arr, n);

	(start == -1) ? console.log("No solution exists!!") : console.log(`Start = ${start}`);

