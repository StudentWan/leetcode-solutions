### 题目描述

#### 54. Spiral Matrix

Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

For example,
Given the following matrix:

    [
        [ 1, 2, 3 ],
        [ 4, 5, 6 ],
        [ 7, 8, 9 ]
    ]
You should return `[1,2,3,6,9,8,7,4,5]`.

### 代码及思路：

#### 我的代码及思路：

```java
    /*
    本算法的思想从观察遍历状况得出。

    我发现，每当绕矩阵的边遍历一圈后，除去矩阵的边，又构成一个新的矩阵螺旋遍历，于是按此思路进行一圈又一圈的螺旋遍历，直到除去边后内部为空为止。

    需要注意的是，如果最后一个矩阵是一维的话，需要去除对一维向量的一些重复遍历结果。
    */
    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> result = new ArrayList<Integer>();
        if (matrix.length == 0) return result;
        int startR = 0;
        int endR = matrix.length - 1;
        int startC = 0;
        int endC = matrix[0].length - 1;
        
        while(startC <= endC && startR <= endR) {
            for (int i = startC; i <= endC; i++) {
                result.add(matrix[startR][i]);
            }

            for (int i = startR + 1; i <= endR; i++) {
                result.add(matrix[i][endC]);
            }

            for (int i = endC - 1; i >= startC && endR > startR; i--) {
                result.add(matrix[endR][i]);
            }

            for (int i = endR - 1; i >= startR + 1 && endC > startC; i--) {
                result.add(matrix[i][startC]);
            }
            startC += 1;
            endC -= 1;
            startR += 1;
            endR -= 1;
        }
        
        return result;
    }
```

