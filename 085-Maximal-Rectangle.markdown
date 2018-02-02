### 题目描述

#### 85. Maximal Rectangle

Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

For example, given the following matrix:

    1 0 1 0 0
    1 0 1 1 1
    1 1 1 1 1
    1 0 0 1 0

Return 6.

### 代码及思路：

#### 学习到的代码及思路：

```java
    /*
    自己没有想到解法ORZ...

    本算法采用了DP和Stack的思路。

    DP的思路体现在，本问题可以由Largest Rectangle in Histogram的解作为一个递推式。

    我们维护一个height数组，长度为n。

    最开始height数组为matrix第一行的数，可以通过Largest Rectangle in Histogram的思路求得本行的最大矩形。

    然后递推到下一行，如果matrix[1][k]为0，则height[k]为0，否则将height[k]加1

    之所以可以将height[k]置0，是因为如果递推到该行的i位置为0，那么该行之前的height[k]将不再对该行Histogram可以得到的最大矩形造成影响，而该行之前的height[k]所构造的最大矩形，已经在之前的递推式中得到了计算。

    如此就可以由上到下，得到max的最大值。

    值得注意的是在计算每一矩阵的Largest Rectangle时的宽度选择问题。

    如果栈为空，那么宽度一定是k，因为栈为空，意味着top之前位置上的高度都要大于height[top]，所以可以直接计算k为宽度。
    */
    public int maximalRectangle(char[][] matrix) {
        if (matrix.length == 0) return 0;
        int m = matrix.length;
        int n = matrix[0].length;
        int[] height = new int[n];
        int max = 0;
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (matrix[i][j] == '0') height[j] = 0;
                else height[j]++;
            }
            
            Stack<Integer> s = new Stack<Integer>();
            
            for (int k = 0; k <= n; k++) {
                int h = (k == n ? 0 : height[k]);
                if (s.isEmpty() || h >= height[s.peek()]) s.push(k);
                else {
                    int top = s.pop();
                    max = Math.max(max, height[top] * (s.isEmpty() ? k : k - 1 - s.peek()));
                    k--;
                }
            }
        }
        
        return max;
    }
```
