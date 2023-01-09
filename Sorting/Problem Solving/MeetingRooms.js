/**
 * Given two arrays S and F where elements in S represents the starting time of the meeting and elements in F represent the
ending time of meetings.We need to find maximum number of meetings that can be accomodated in a meeting room

Intuition:Here we need to choose maximum number of meetings without any violation.If we sort this interval on the basis of end
time we would have input something like this
[ {1,2},{3,4},{0,6},{6,7},{8,9},{4,9} ]
Choosing end time for sorting so that we get the smallest end times earlier as it would help us to choose maximum
intervals.Now we need to select intervals and for selection of intervals ,previous intervals ending time should be less than new
intervals starting time.If this condition is met we increase the count of interval.
Approach: As we want maximum number of meetings to happen we need to add as many number of meetings whose ending
time are less We create a array storing {si,fi} as element of array.We then sort this array on the basis of finishing time(fi) as we
want to select maximum number of meetings so the elements having less finish time will be of advantage and set finish limit as
finishing time of first meeting.Now iterate over the start array from index one and check if start time greater than finish limit
update the meeting counter by one and finish limit by finish timing of current meeting
Algorithm:
1)Create a array containing both start and finish time
2)Sort this array in increasing order of finish time of each pair
3)Create a counter for keeping track of meeting and limit for finding the ending time of previous meeting
4)Increment the counter by one as we are keeping the first element of the sorted array and set limit to ending time of first
meeting
5)Traverse from second element to last element of array and if the starting time is greater than limit increment counter by one
and update limit to ending time of current element

 */

var start = [1,3,0,6,8,4];
var finish = [2,4,6,7,9,9];

function maxMeeting(s,f){
	var pair = [];
  let n  = start.length;
  for(let i=0;i<n;i++){
  	pair.push([s[i],f[i]]);
  }
  pair.sort((a,b)=>a[1]-b[1]);
  let counter = 1;
  let limit = pair[0][1];
  
  for(let i=1;i<n;i++){
  	if(pair[i][0]>=limit){
    	counter++;
      limit = pair[i][1];
    }
  }
  return counter;
}

console.log(maxMeeting(start,finish));