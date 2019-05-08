#### Brute-Force Recursion

```js
var lengthOfLIS = function(nums) {
    return findLIS(nums, -Infinity, 0);
};

var findLIS = function(nums, prev, curIndex) {
    if (curIndex === nums.length) {
        return 0;
    }
    
    let taken = 0;
    if (nums[curIndex] > prev) {
        taken = 1 + findLIS(nums, nums[curIndex], curIndex + 1);
    }
    let nontaken = findLIS(nums, prev, curIndex + 1);
    
    return Math.max(taken, nontaken);
}
```

####  Recursion with memorization

```js
var lengthOfLIS = function(nums) {
    const memo = new Array(nums.length + 1);
    for (let i = 0; i < memo.length; i++) {
        memo[i] = new Array(nums.length);
        memo[i].fill(-1);
    }
    
    return findLIS(nums, memo, -1, 0);
};

var findLIS = function(nums, memo, prev, cur) {
    if (cur === nums.length) {
        return 0;
    }
    
    if (memo[prev + 1][cur] > -1) {
        return memo[prev + 1][cur];
    }
    
    let taken = 0;
    if (prev < 0 || nums[cur] > nums[prev]) {
        taken = findLIS(nums, memo, cur, cur + 1) + 1;
    }
    
    const nontaken = findLIS(nums, memo, prev, cur + 1);
    
    memo[prev + 1][cur] = Math.max(taken, nontaken);
    return memo[prev + 1][cur];
}
```


#### Dynamic Programming

```js
/*
* 状态转移式是可能由多个前状态共同推导的，这符合无后效性的规定。
*/
var lengthOfLIS = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    
    const dp = new Array(nums.length);
    dp[0] = 1;
    
    for (let i = 1; i < dp.length; i++) {
        let max = 0;
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                max = Math.max(max, dp[j]);
            }
        }
        dp[i] = max + 1;
    }
    
    let max = 0;
    for (const lis of dp) {
        max = Math.max(max, lis);
    }
    return max;
};
```
