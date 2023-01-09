/**
 * N Queen – Consider an N*N chessboard. N Queen's problem is to place N queens on the N*N
chessboard such that no two queens can attack each other.

Naive Approach – Try to generate all possible combinations and print the combination satisfying the condition.
Efficient Approach – This can be solved using recursion.
Intuition - Our main task is to place a queen with no clash with another queen. We will check this condition for all columns
one by one. We will backtrack and check for another column if there is any clash. This technique is a backtracking
algorithm.
Steps -
1. Start from the leftmost column
2. If all queens are placed, then return true. (base case)
3. Iterate through every row for the current column
4. If the queen is safely placed in the current row, mark [row, column] as a solution.
5. Verify if placing the queen in her current position is safe, return true
6. If placing queen is not safe, unmark [row, column], then backtrack and go to step 4 to check other rows
7. If all the rows have been checked and are not fulfilling the condition, return false and backtrack again.
 */


N = 4;
  
function print(chessboard)
{
arrText='';
for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++){
    arrText+=chessboard[i][j]+' ';   
  }
  console.log(arrText);
  arrText = '';
    }
    
}

function isSafe(chessboard, row, col)
{
    var i = 0;
    var j = 0;
    
    for (i = 0; i < col; i++)
    {
        if (chessboard[row][i] == 1)
        {
            return false;
        }
    }
    
    for (i = row, j = col; i >= 0 && j >= 0; i--, j--)
    {
        if (chessboard[i][j] == 1)
        {
            return false;
        }
    }
    
    for (i = row, j = col; j >= 0 && i < this.N; i++, j--)
    {
        if (chessboard[i][j] == 1)
        {
            return false;
        }
    }
    return true;
}

function solveNQueenUtil(chessboard, col)
{
    
    if (col >= this.N)
    {
        return true;
    }

    for (var i = 0; i < this.N; i++)
    {
        
        if (this.isSafe(chessboard, i, col))
        {
        
            chessboard[i][col] = 1;
            
            if (this.solveNQueenUtil(chessboard, col + 1) == true)
            {
                return true;
            }
            
            chessboard[i][col] = 0;
        }
    }
    return false;
}

function solveNQueen()
{
    var chessboard = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    if (this.solveNQueenUtil(chessboard, 0) == false)
    {
        console.log("Solution does not exist");
        return false;
    }
    this.print(chessboard);
    return true;
}

solveNQueen();



