/**
 * Tiling Problem
What is a Tiling Problem ?
Given a “2 x n” tile board with fixed width of 2 units and the length of the board is ‘n’ units, the area of the board
is n x 2 sq. units and tiles of size 2 x 1 sq. units.
The Tiling Problem asks us to find out in how many ways we can arrange these tiles to fully cover the tile board.
( A tile can either be placed horizontally i.e as a 1 x 2 tile or vertically i.e as 2 x 1 tile
Example Test Case:
For N = 2, i.e a grid of 2 x 2 there are two ways you can fill the 2 x 2 size grid using tiles of size 2 x 1 and 1 x 2
DSA- Class 10 #180DaysofPurpose
Tiling Problem
One way is fill both of the columns with two vertical tiles this would be one configuration,
Other one is you can fill it using two horizontal tiles. So there are two possible ways
For N = 2 i.e 2 x 2 would be 2.
Example Test Case:
For N = 3,
If we are given a grid of size 2 x 3, then there are three possible ways you can fill the grid using horizontal and
vertical tiles
First one is you have used all three vertical tiles and the second configuration is first vertical and then two horizontal
tiles and the third one is two horizontal tiles first and then a vertical tile
So, for N = 3 i.e 2 x 3 there are only three possible ways you can fill the grid using vertical or horizontal tiles 
 */

function numberOfWays(c) {
    if(c === 0) return 1;
    if(c === 1) return 1;
    return numberOfWays(c - 1) + numberOfWays(c - 2);
  }
  var b = prompt("Enter the size of the tile board: 2 x ?");
  console.log(
    "The total number of ways in which the tiles of size 2x1 can be used to fill a tile board of size 2x" +
      b +
      " is " +
      numberOfWays(b)
  );
  