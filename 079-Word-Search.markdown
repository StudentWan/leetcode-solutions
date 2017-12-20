### 题目描述

#### 79. Word Search

Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

For example,

Given `board` =

    [
        ['A','B','C','E'],
        ['S','F','C','S'],
        ['A','D','E','E']
    ]
    
`word` = `"ABCCED"`, -> returns `true`,

`word` = `"SEE"`, -> returns `true`,

`word` = `"ABCB"`, -> returns `false`.

### 代码及思路：

#### 我的代码及思路：

```java
    /*
    实际上这道题最开始是有一点迷茫的，后来看了一下tag，考虑了用递归去回溯。

    另外要注意的一点是递归有一些有初始条件，而这道题可以直接递归。

    因为题目描述board中都是字母，所以用字符'0'来替换已被找到的字母，其实有一点投机取巧，不过可以降低很多难度。
    */
    public boolean exist(char[][] board, String word) {
        char[] w = word.toCharArray();
        int c = 0;
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[0].length; j++) {
                if (findWord(board, i, j, w, c)) return true;
            }
        }
        return false;
    }
    
    private boolean findWord(char[][] board, int i, int j, char[] word, int count) {
        if (count == word.length - 1 && board[i][j] == word[count]) return true;
        if (board[i][j] == word[count]) {
            char temp = board[i][j];
            board[i][j] = '0';
            if (i < board.length - 1) {
                if (findWord(board, i + 1, j, word, count + 1)) return true;
            }
            if (i > 0) {
                if (findWord(board, i - 1, j, word, count + 1)) return true;
            }
            if (j < board[0].length - 1) {
                if(findWord(board, i, j + 1, word, count + 1)) return true;
            }
            if (j > 0) {
                if (findWord(board, i, j - 1, word, count + 1)) return true;
            }
            board[i][j] = temp;
        }
        return false;
    }
```
