### 题目描述：

#### 48. Rotate Image

You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Note:
You have to rotate the image `in-place`, which means you have to modify the input 2D matrix directly. `DO NOT` allocate another 2D matrix and do the rotation.

`Example 1:`

    Given input matrix = 
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ],

    rotate the input matrix in-place such that it becomes:
    [
        [7,4,1],
        [8,5,2],
        [9,6,3]
    ]

`Example 2:`

    Given input matrix =
    [
        [ 5, 1, 9,11],
        [ 2, 4, 8,10],
        [13, 3, 6, 7],
        [15,14,12,16]
    ], 

    rotate the input matrix in-place such that it becomes:
    [
        [15,13, 2, 5],
        [14, 3, 4, 1],
        [12, 6, 8, 9],
        [16, 7,10,11]
    ]

### 代码及思路：

#### 我的代码及思路：

```java
    /*
    这个解法实际上是不符合题意的，空间复杂度达到了O(n^2)。

    allocate一个二维矩阵暂存旋转后的矩阵。

    再将旋转后的矩阵放回原矩阵中。
    */
    public void rotate(int[][] matrix) {
        int n = matrix[0].length;
        int[][] tempMatrix = new int[n][n];
        
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n ; j++) {
                tempMatrix[j][n - i - 1] = matrix[i][j];
            }
        }
        
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                matrix[i][j] = tempMatrix[i][j];
            }
        }
    }
```

#### 学习到的代码及思路：

```java
    /*
    本算法的空间复杂度降到了O(1)。

    主要思路是先将数组转置，然后交换水平对称的元素，可以得到旋转90度的数组。

    本题还有许多思路，但关键点在于找到矩阵变换的规律，并熟用常见的矩阵变换算法，如转置算法等。
    */
    public void rotate(int[][] matrix) {
        int n = matrix[0].length;
        int temp;
        
        for (int i = 0; i < n; i++) {
            for (int j = i; j < n; j++) {
                temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }
        
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n / 2; j++) {
                temp = matrix[i][j];
                matrix[i][j] = matrix[i][n - j - 1];
                matrix[i][n - j - 1] = temp;
            }
        }
    }
```