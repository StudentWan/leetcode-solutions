### 题目描述

#### 59. Spiral Matrix II

Given an integer n, generate a square matrix filled with elements from 1 to n^2 in spiral order.

For example,
Given n = `3`,

You should return the following matrix:

    [
        [ 1, 2, 3 ],
        [ 8, 9, 4 ],
        [ 7, 6, 5 ]
    ]

### 代码及思路：

#### 我的代码及思路：

```java
    /*
    本算法使用的是与54题一样的思路，只不过是以相反的方式执行它而已。

    为了方便理解，本算法采用了递归，先构成矩阵外圈，再逐步内缩。
    */
    public int[][] generateMatrix(int n) {
        int[][] matrix = new int[n][n];
        fillMatrix(matrix, 0, n, 1);
        return matrix;
    }
    
    private void fillMatrix(int[][] matrix, int start, int end, int count) {
        if (start < end - 1) {
            int i = start;
            while (i < end) {
                matrix[start][i] = count++;
                i++;
            }
            i = start + 1;
            while (i < end) {
                matrix[i][end - 1] = count++;
                i++;
            }
            i = end - 2;
            while (i >= start) {
                matrix[end - 1][i] = count++;
                i--;
            }
            i = end - 2;
            while (i > start) {
                matrix[i][start] = count++;
                i--;
            }
            start++;
            end--;
            fillMatrix(matrix, start, end, count);
        }
        else if (start == end - 1) {
            matrix[start][start] = count;
        }
        else {
            return ;
        }
    }
```