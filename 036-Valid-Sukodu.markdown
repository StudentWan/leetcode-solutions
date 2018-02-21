### 题目描述

#### 36. Valid Sudoku

Determine if a Sudoku is valid, according to: [Sudoku Puzzles - The Rules.](http://sudoku.com.au/TheRules.aspx)

The Sudoku board could be partially filled, where empty cells are filled with the character `'.'`.

![sudoku](imgs/sudoku.png)

A partially filled sudoku which is valid.

`Note:`

A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated

### 代码及思路

```java
    /*
    本题基本上就是翻译题意即可，时间复杂度为O(n ^ 2)。
    */
    public boolean isValidSudoku(char[][] board) {
        for (int i = 0; i < 9; i++) {
            Set<Character> row = new HashSet<Character>();
            Set<Character> column = new HashSet<Character>();
            Set<Character> subBox = new HashSet<Character>();
            for (int j = 0; j < 9; j++) {
                if (board[i][j] != '.') {
                    if (!row.add(board[i][j])) return false;
                }
                if (board[j][i] != '.') {
                    if (!column.add(board[j][i])) return false;
                }
                if (board[j / 3 + i / 3 * 3][j % 3 + i % 3 * 3] != '.') {
                    if (!subBox.add(board[j / 3 + i / 3 * 3][j % 3 + i % 3 * 3])) return false;
                }
            }
        }
        return true;
    }
```