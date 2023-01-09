/**
 * Here we have a two dimensional array it could be array of characters or integers but usually there will be ones and
zeros
Where 0 is the valid path and -1 would be like the wall and here we use recursion to iterate over this array, here we
need to find out the starting point, usually the starting point will be off (0,0)
and ending at the end of the array. So you have to find the way by figuring out which path has 0 and then take the
path and if you get a like a wall or there’s nowhere else to go then you have to go back to where you started 



 */

let R = 4;
let C = 4;
// returns count of possible paths in a array[R][C] from (0,0) to (R-1, C-1)
function countPaths(array) {
  // If the initial cell is blocked, there is no way of moving anywhere
  if (array[0][0] === -1) return 0;
  // Initializing the leftmost column
  for (let i = 0; i < R; i++) {
    if (array[i][0] === 0) array[i][0] = 1;
    // If we encounter a blocked cell in leftmost row, there is no way of visiting any cell directly below  // it
    else break;
  }
  // similarly initialize the topmost row
  for (let i = 1; i < C; i++) {
    if (array[0][i] === 0) array[0][i] = 1;
    // If we encounter a blocked cell in bottommost row , there is no way of visiting any cell directly
    // below it
    else break;
  }

  //The only difference is that if a cell is -1, simply ignore it else recursively compute count value array[i][j]
  for (let i = 1; i < R; i++) {
    for (let j = 1; j < C; j++) {
      // If blockage is found, ignore this cell
      if (array[i][j] === -1) continue;
      //If we can reach array[i][j] from array[i-1][j] then increment count.
      if (array[i - 1][j] > 0) array[i][j] = array[i][j] + array[i - 1][j];
      // If we can reach array[i][j] from array[i][j-1] then increment count.
      if (array[i][j - 1] > 0) array[i][j] = array[i][j] + array[i][j - 1];
    }
  }
  // If the final cell is blocked, output 0, otherwise the answer
  return array[R - 1][C - 1] > 0 ? array[R - 1][C - 1] : 0;
}

let array = [
  [0, 0, 0, 0],
  [0, -1, 0, 0],
  [-1, 0, 0, 0],
  [0, 0, 0, 0]
];

document.write(countPaths(array));
