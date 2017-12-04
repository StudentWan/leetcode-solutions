### 题目描述

#### 63. Unique Paths II

Follow up for "Unique Paths":

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and empty space is marked as `1` and `0` respectively in the grid.

For example,
There is one obstacle in the middle of a 3x3 grid as illustrated below.

    [
        [0,0,0],
        [0,1,0],
        [0,0,0]
    ]

The total number of unique paths is `2`.

`Note:` m and n will be at most 100.

### 代码及思路：

#### 我的代码及思路：

```java
    /*
    本算法采用了和062题一样的DP思路，只不过将有障碍的节点的到达路径数设置为0，这样计算得出的路径就不可以通过障碍节点了。

    时间复杂度是O(n ^ 2)。
    */
    public int uniquePathsWithObstacles(int[][] obstacleGrid) {
        int m = obstacleGrid.length;
        int n = obstacleGrid[0].length;
        int[][] paths = new int [m][n];
        for (int i = 0; i < m; i++) {
            if (obstacleGrid[i][0] == 1) {
                int j = i;
                while (j >= i && j < m) {
                    paths[j][0] = 0;
                    j++;
                }
                break;
            }
            else {
                paths[i][0] = 1;
            }
        }
        for (int i = 0; i < n; i++) {
            if (obstacleGrid[0][i] == 1) {
                int j = i;
                while (j >= i && j < n) {
                    paths[0][j] = 0;
                    j++;
                }
                break;
            }
            else {
                paths[0][i] = 1;
            }
        }
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n ; j++) {
                if (obstacleGrid[i][j] == 1) {
                    paths[i][j] = 0;
                } 
                else {
                    paths[i][j] = paths[i - 1][j] + paths[i][j - 1];
                }
            }
        }
        return paths[m - 1][n - 1];
    }
```

#### 学习到的代码及思路：

```java
    /*
    本算法同样使用DP，与我的算法不同的是，它只维护一个行向量，同样可以触接到finish这个节点。

    这样的话只需要对第一列做一定的特殊处理，代码量大幅减少，时间复杂度依然是O(n ^ 2)。
    */
    public int uniquePathsWithObstacles(int[][] obstacleGrid) {
        int width = obstacleGrid[0].length;
        int[] dp = new int[width];
        dp[0] = 1;
        for (int[] row : obstacleGrid) {
            for (int i = 0; i < width; i++) {
                if (row[i] == 1) {
                    dp[i] = 0;
                }
                else if (i > 0) {
                    dp[i] += dp[i - 1];
                }
            }
        }
        
        return dp[width - 1];
    }
```