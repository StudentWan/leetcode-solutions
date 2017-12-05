### 题目描述

#### 73. Set Matrix Zeroes

Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.

`Follow up:`

Did you use extra space?

A straight forward solution using O(mn) space is probably a bad idea.

A simple improvement uses O(m + n) space, but still not the best solution.

Could you devise a constant space solution?

### 代码及思路：

#### 我的代码及思路1：

```java
    /*
    这是最直观的一种算法，空间复杂度是O(m * n)。

    思路简单，就是用一个矩阵temp暂存matrix矩阵，然后根据temp的元素来讲matrix的相应元素置0。
    */
    public void setZeroes(int[][] matrix) {
        int m = matrix.length;
        int n = matrix[0].length;
        int[][] temp = new int[m][n];
        int k;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                temp[i][j] = matrix[i][j];
            }
        }
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (temp[i][j] == 0) {
                    k = 0;
                    while (k < m) {
                        matrix[k][j] = 0;
                        k++;
                    }
                    k = 0;
                    while (k < n) {
                        matrix[i][k] = 0;
                        k++;
                    }
                }
            }
        }
    }
```

#### 我的代码及思路2：

```java
    /*
    本算法对上一算法做了简单优化，空间复杂度是O(m + n)。

    思想是设置两个数组row和column，row暂存每行是否该置0，column暂存每列是否该置0，然后修改matrix矩阵。
    */
    public void setZeroes(int[][] matrix) {
        int m = matrix.length;
        int n = matrix[0].length;
        int k;
        
        int[] row = new int[m];
        int[] column = new int[n];
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (matrix[i][j] == 0) {
                    row[i] = 1;
                    column[j] = 1;
                }
            }
        }
        
        for (int i = 0; i < m; i++) {
            if (row[i] == 1) {
                k = 0;
                while (k < n) {
                    matrix[i][k] = 0;
                    k++;
                }
            }
        }
        
        for (int j = 0; j < n; j++) {
            if (column[j] == 1) {
                k = 0;
                while (k < m) {
                    matrix[k][j] = 0;
                    k++;
                }
            }
        }
    }
```

#### 学习到的代码及思路：

```java
    /*
    本算法是进一步的优化，空间复杂度为O(1)。

    算法思想比较精妙。
    
    首先是使用matrix矩阵的第一行和第一列暂存该行列是否应该置0。

    然后设置两个布尔值fRZ和fCZ，表示第一行和第一列是否应该置0。

    由于第一行和第一列要暂存状态信息，所以先将matrix非第一行和非第一列的数组置0。

    最后根据fRZ和fCZ的布尔值来决定第一行和第一列是否置0。
    */
    public void setZeroes(int[][] matrix) {
        boolean fRZ = false;
        boolean fCZ = false;
        int m = matrix.length;
        int n = matrix[0].length;
        int k;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (matrix[i][j] == 0) {
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                    if (i == 0) fRZ = true;
                    if (j == 0) fCZ = true;
                }
            }
        }
        
        for (int i = 1; i < m; i++) {
            if (matrix[i][0] == 0) {
                k = 1;
                while (k < n) {
                    matrix[i][k] = 0;
                    k++;
                }
            }
        }
        
        for (int j = 1; j < n; j++) {
            if (matrix[0][j] == 0) {
                k = 1;
                while (k < m) {
                    matrix[k][j] = 0;
                    k++;
                }
            }
        }
        
        if (fRZ) {
            for (int i = 0; i < n; i++) {
                matrix[0][i] = 0;
            }
        }
        
        if (fCZ) {
            for (int j = 0; j < m; j++) {
                matrix[j][0] = 0;
            }
        }
    }
```