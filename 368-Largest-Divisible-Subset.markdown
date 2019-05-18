#### Dynamic Programming

与Q300求LIS的DP思路类似，但是子问题并不一致，代表“num[i]为最大值时的Divisible Subset的大小”，遇到类似的题时，注意灵活思路，可能下次遇到的子问题又不一致。

另外，使用pre数组存储前序节点的方式值得学习。

```js
var largestDivisibleSubset = function(nums) {
    nums.sort((a, b) => a - b);
    const dp = new Array(nums.length);
    dp.fill(0);
    const pre = new Array(nums.length);
    
    let m = 0;
    let mi;
    debugger;
    for (let i = 0; i < nums.length; i++) {
        let tmp = dp[i];
        for (let j = 0; j <= i; j++) {
            if (nums[i] % nums[j] === 0 && dp[j] + 1 > tmp) {
                tmp = dp[j] + 1;
                pre[i] = j;
                if (tmp > m) {
                    m = tmp;
                    mi = i;
                }
            }
        }
        dp[i] = tmp;
    }
    
    const res = [];
    let i = 0;
    while (i++ < m) {
        res.push(nums[mi]);
        mi = pre[mi];
    }
    
    return res.reverse();
};
```