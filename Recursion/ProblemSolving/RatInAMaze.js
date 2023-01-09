/**
 * Rate In a Maze
Rat in a Maze – A maze is an N*N binary matrix of blocks where the upper left block is known as the Source
block, and the lower rightmost block is known as the Destination block. If we consider maze, then maze[0][0] is
source and maze[N-1][N-1] is destination. Our main problem task is to reach the destination from the source. We
have considered a rat as a character that can move either forward or down.
In the maze matrix, a few dead blocks will be denoted by 0, and active blocks will be denoted by 1. A rat can
move only in the active blocks.

Intuition – We can solve this problem using recursion. We need a path from source to destination to try multiple paths.
When we use any random path, and if it fails to reach the destination, we can backtrack and try another path. Since we are
trying the same logic multiple times, we can use the recursive technique. We call this technique when we backtrack and
try another path a Backtracking Algorithm.
Approach – Create a recursive function that will follow a path, and if that path fails, then backtrack and try another path.
Let’s see each step –
1. Create an output matrix having all values as 0
2. Create a recursive function, which will take input matrix, output matrix, and rat position (i,j)
3. If the position is not valid, then return.
4. Make output[i][j] as one and verify if the current position is the destination or not. If yes, return the output matrix
5. Recursively call the function for position (i+1, j) and (i,j+1)
6. Make output[i][j] as 0


 */

let N;

function print(output)
{
  arrText='';
	for (let i = 0; i < N; i++) {
			for (let j = 0; j < N; j++){
        arrText+=output[i][j]+' ';
          
      }
      console.log(arrText);
      arrText = '';
		}
}

function isSafe(maze,i,j)
{
		return (i >= 0 && i < N && j >= 0
				&& j < N && maze[i][j] == 1);
}

function solveRateInMaze(maze)
{
	let output = new Array(N);
	for(let i=0;i<N;i++)
	{
		output[i]=new Array(N);
		for(let j=0;j<N;j++)
		{
			output[i][j]=0;
		}
	}

		if (solveRateInMazeUtil(maze, 0, 0, output) == false) {
			console.log("Solution doesn't exist");
			return false;
		}
		print(output);
		return true;
}

function solveRateInMazeUtil(maze,x,y,output)
{
		if (x == N - 1 && y == N - 1
			&& maze[x][y] == 1) {
			output[x][y] = 1;
			return true;
		}

		
		if (isSafe(maze, x, y) == true) {
		
			if (output[x][y] == 1)
				return false;
			
			output[x][y] = 1;

			if (solveRateInMazeUtil(maze, x + 1, y, output))
				return true;

			if (solveRateInMazeUtil(maze, x, y + 1, output))
				return true;
			
			
			if (solveRateInMazeUtil(maze, x - 1, y, output))
				return true;

			
			if (solveRateInMazeUtil(maze, x, y - 1, output))
				return true;

		
			output[x][y] = 0;
			return false;
		}

		return false;
}

let maze=[[ 1, 0, 0, 0 ],
		  [ 1, 1, 0, 1 ],
		  [ 0, 1, 0, 0 ],
		  [ 1, 1, 1, 1 ] ];
N = maze.length;
solveRateInMaze(maze);

