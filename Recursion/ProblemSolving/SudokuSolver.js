/**
 * Sudoku Solver – Consider a 9*9 2D array grid partially filled with numbers from 1 to 9. Sudoku Solver problem is to fill
remaining blocks with numbers from 1 to 9, such that every row, column, and subgrid (3*3) contains exactly one instance
of digits(1 to 9).

Naive Approach – Try to generate all possible combinations and print the combination satisfying the condition.
Efficient Approach - We can solve this problem using recursion
Intuition – We need output such that rows, columns, and subgrids have one instance from 1 to 9. We can assign a number
to the empty cell and check if it is safe to assign the value. If that assignment violates the rule, we will backtrack and try for
another assignment of number.
Steps –
1. Create a function that will check if the assignment of the number to the cell is safe or not.
2. Create a recursive function that will take grid as input
3. Assign a number to an unfilled cell, and check if it is safe to assign; if yes, then recursively call the function for all
safe cases. If any recursive call returns true, then return true. If no recursive call returns true, then return false.
4. If there is no unassigned cell, return true.

 */

let N = 9;

function solveSudoku(grid, row, col)
{
    
  
    if (row == N - 1 && col == N)
        return true;

  
    if (col == N)
    {
        row++;
        col = 0;
    }

  
    if (grid[row][col] != 0)
        return solveSudoku(grid, row, col + 1);

    for(let num = 1; num < 10; num++)
    {
        
        if (isSafe(grid, row, col, num))
        {
            
          
            grid[row][col] = num;

            
            if (solveSudoku(grid, row, col + 1))
                return true;
        }
       
        grid[row][col] = 0;
    }
    return false;
}


function print(grid)
{
   arrText='';
	for (let i = 0; i < N; i++) {
			for (let j = 0; j < N; j++){
        arrText+=grid[i][j]+' ';
          
      }
      console.log(arrText);
      arrText = '';
		}
}

function isSafe(grid, row, col, num)
{
  
    for(let x = 0; x <= 8; x++)
        if (grid[row][x] == num)
            return false;

 
    for(let x = 0; x <= 8; x++)
        if (grid[x][col] == num)
            return false;

    let startRow = row - row % 3, 
        startCol = col - col % 3;
        
    for(let i = 0; i < 3; i++)
        for(let j = 0; j < 3; j++)
            if (grid[i + startRow][j + startCol] == num)
                return false;

    return true;
}

let grid = [ [ 3, 0, 6, 5, 0, 8, 4, 0, 0 ],
             [ 5, 2, 0, 0, 0, 0, 0, 0, 0 ],
             [ 0, 8, 7, 0, 0, 0, 0, 3, 1 ],
             [ 0, 0, 3, 0, 1, 0, 0, 8, 0 ],
             [ 9, 0, 0, 8, 6, 3, 0, 0, 5 ],
             [ 0, 5, 0, 0, 9, 0, 6, 0, 0 ],
             [ 1, 3, 0, 0, 0, 0, 2, 5, 0 ],
             [ 0, 0, 0, 0, 0, 0, 0, 7, 4 ],
             [ 0, 0, 5, 2, 0, 6, 3, 0, 0 ] ]
 
if (solveSudoku(grid, 0, 0))
    print(grid)
else
    console.log("Solution doesn't exists")

