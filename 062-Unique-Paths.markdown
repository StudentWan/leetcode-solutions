### 题目描述

#### 62. Unique Paths

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

![robot_maze](./imgs/robot_maze.png)

Above is a 3 x 7 grid. How many possible unique paths are there?

`Note`: m and n will be at most 100.



### 代码及思路：

#### 我的代码及思路：

```java
    /*
    本算法利用递归来实现DP。
    
    当m == 1 或者 n == 1 时，只有一种选择。
    
    当m > 1 并且 n > 1 时，unquePaths(m, n) = uniquePaths(m - 1, n) + uniquePaths(m, n - 1)。
    
    但是由于递归调用的时间开销太大，所以本算法TLE了。
    */
    public int uniquePaths(int m, int n) {
        int count = 0;
        if (m == 1 || n == 1) {
            return 1;
        }
        
        if (m > 1) {
            count += uniquePaths(m - 1, n);
        }
        
        if (n > 1) {
            count += uniquePaths(m, n - 1);
        }
        return count;
    }
```

#### 学习到的代码及思路：

```java
    /*
    同样是利用上述的DP思想来解题。
    
    不过instead of利用递归，本算法使用一个 m * n 阶矩阵来存储到每一个点的路径数。
    
    到 i = 0 或 j = 0 的点，只有一种路径，返回 1
    
    到 i > 0 并且 j > 0 的点， 路径有 grid[i - 1][j] + grid[i][j - 1] 条。
    */
    public int uniquePaths(int m, int n) {
        int[][] grid = new int[m][n];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (i == 0 || j == 0) {
                    grid[i][j] = 1;
                }
                else {
                    grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
                }
            }
        }
        
        return grid[m - 1][n - 1];
    }
```
