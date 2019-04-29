#### Dynamic Programming

```js
/**
 * DP中问题与子问题的关系
 * 可以是问题是子问题的更大规模表现
 * 也可以是问题能够从子问题中推导出来
 * 明确这两种关系形式，再去确定最优子结构与无后效性
 */
var maximalSquare = function(matrix) {
    const m = matrix.length;
    if (m === 0) {
        return 0;
    }
    const n = matrix[0].length;
    
    const dp = new Array(m);
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n);
        dp[i].fill(0);
    }
    
    let max = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '1') {
                if (i === 0 || j === 0) {
                    dp[i][j] = 1
                } else {
                    let tmp = Math.min(dp[i - 1][j - 1], dp[i][j - 1]);
                    dp[i][j] = Math.min(tmp, dp[i - 1][j]) + 1;
                }
                max = Math.max(dp[i][j], max);
            }
        }
    }
    return max * max;
};
```