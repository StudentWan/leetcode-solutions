### 题目描述

#### 74. Search a 2D Matrix

Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

    Integers in each row are sorted from left to right.
    The first integer of each row is greater than the last integer of the previous row.

For example,

Consider the following matrix:

    [
        [1,   3,  5,  7],
        [10, 11, 16, 20],
        [23, 30, 34, 50]
    ]

Given `target` = `3`, return `true`.

### 代码及思路：

#### 我的代码及思路1：

```java
    /*
    最简单的思路当然就是暴搜了，时间复杂度是O(n ^ 2)。
    */
    public boolean searchMatrix(int[][] matrix, int target) {
        if (matrix.length == 0) {
            return false;
        }
        int m = matrix.length;
        int n = matrix[0].length;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (matrix[i][j] == target) {
                    return true;
                }
            }
        }
        return false;
    }
```

#### 我的代码及思路2：

```java
    /*
    由于矩阵是按序排列的，所以可以利用二分查找的思路来降低时间开销。

    二分的方式也很简单，不把矩阵看做矩阵，而是把它看做一个有序列表，只不过得到的midPos要转化成节点需要一个求商和求模的过程而已。

    时间复杂度为O(log2(n ^ 2))
    */
    public boolean searchMatrix(int[][] matrix, int target) {
        if (matrix.length == 0 || matrix[0].length == 0) {
            return false;
        }
        int m = matrix.length;
        int n = matrix[0].length;
        int lowPos = 0;
        int highPos = m * n - 1;
        int midPos;
        int midEle;
        
        while (lowPos < highPos) {
            midPos = (lowPos + highPos) / 2;
            midEle = matrix[midPos / n][midPos % n];
            if (midEle < target) {
                lowPos = midPos + 1;
            }
            else if (midEle > target) {
                highPos = midPos - 1;
            }
            else {
                return true;
            }
        }
        
        if (matrix[lowPos / n][lowPos % n] == target) {
            return true;
        }
        
        return false;
    }
```