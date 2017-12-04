### 题目描述

#### 64. Minimum Path Sum

Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

`Note:` You can only move either down or right at any point in time.

`Example 1:`

    [[1,3,1],
    [1,5,1],
    [4,2,1]]

Given the above grid map, return `7`. Because the path 1→3→1→1→1 minimizes the sum.

### 代码及思路：

#### 我的代码及思路：

```java
    /*
    本题与62和63题的思路是类似的，依然是采用动态规划的思想。

    即，到grid[i][j]最短的路径是 到grid[i - 1][j]最短的路径 与 到grid[i][j - 1]最短的路径 中的最小值加上grid[i][j]。

    对于第一行和第一列的情况进行特别处理。
    */
    public int minPathSum(int[][] grid) {
        int width = grid[0].length;
        int height = grid.length;
        int[] dp = new int[width];
        for (int i = 0; i < width; i++) {
            if (i == 0) {
                dp[i] = grid[0][i];
            } else {
                dp[i] = dp[i - 1] + grid[0][i];
            }
        }
        
        for (int i = 1; i < height; i++) {
            for (int j = 0; j < width; j++) {
                if (j > 0) {
                    dp[j] = Math.min(dp[j], dp[j - 1]) + grid[i][j];
                } else {
                    dp[j] += grid[i][j];
                }
            }
        }
        return dp[width - 1];
    }
```

#### 学习到的代码及思路：

```java
    /*
    本算法与上述我自己想到的算法思想一致。

    巧妙之处在于利于grid数组存储最短路径（毕竟节点值在存储路径之后已经不再需要），从而不需要extra space就可以完成算法，空间复杂度是O(1)。
    */
    public int minPathSum(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (i == 0 && j != 0) {
                    grid[i][j] += grid[i][j - 1];
                }
                else if (i != 0 && j == 0) {
                    grid[i][j] += grid[i - 1][j];
                }
                else if (i == 0 && j == 0){}
                else {
                    grid[i][j] = Math.min(grid[i][j - 1], grid[i - 1][j]) + grid[i][j];
                }
            }
        }
        
        return grid[m - 1][n - 1];
    }
```