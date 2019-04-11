#### Dynamic Programming

```js
/**
 * 学会动态规划算法的设计思想
 * 先判断：是否可由DP解
 * 最优子结构： f(n)的解可由f(p)推出(p < n)
 * 无后效性： 求得f(n)以后的计算中，如何求得f(n)就不关心了
 * 然后设计动态规划算法
 * 首先确定动态规划状态：f(x)
 * 而后或者确定f(x)往哪里去
 * 或者确定f(x)由何处来
 * 以上两点，谓之状态转移方程
 */
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const dp = [];
    dp[0] = 1;
    dp[1] = s[0] > 0 ? 1 : 0;
    for (let i = 2; i <= s.length; i++) {
        dp[i] = 0;
        if (s[i - 1] > 0) {
            dp[i] = dp[i - 1];
        }
        if (s[i - 2] > 0 && s.substring(i - 2, i) <= 26) {
            dp[i] += dp[i - 2];
        }
    }
    return dp[s.length];
};
```