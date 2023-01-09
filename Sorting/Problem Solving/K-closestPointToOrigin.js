/**
 * Given two array of points one representing the x-coordinate and one representing the y-coordinate and a integer
k,return the k closest points to origin(0,0)
The distance between two points is Euclidean distance sqr_root((x1-x2)^2+(y1-y2)^2)
Answer can be written in any order

Intuition:
We can calculate the euclidean distance for every point from origin,for finding the k nearest points somehow we need
to store this distance.If we store this in array and then we need to find the kth element in this array which can be found
out if we sort the array.After sorting the array the element at kth index will be our required element.Now all the points
having distance less than equal to k will belong to answer group.
Approach:
The approach behind this problem is find the euclidean distance of each point from the origin and store it in a
separate array and sort the distance array and return the first k points corresponding to the distance array
Algorithm:
1)Create a distance array and store the euclidean distance of all points from origin.Sort the array .
2)Select the first k points and return the corresponding points for this distances.

 */

x = [1,2,3,4];
y = [3,4,1,0];

k = 2;

function k_closest(x,y,k){
	let output = [];
  let n = x.length;
  let dist = new Array(n);
  for(let i=0;i<n;i++){
  	dist[i] = x[i]*x[i]+y[i]*y[i];
  }
  dist.sort((a,b)=>a-b);
  let k_dist = dist[k-1];
  for(let i=0;i<n;i++){
  	let temp = x[i]*x[i]+y[i]*y[i];
    if(temp<=k_dist){
    	output.push(x[i],y[i]);
    }
  }
  return output;
}

console.log(k_closest(x,y,k));