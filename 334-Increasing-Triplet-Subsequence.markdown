#### Dynamic Programming

使用DP求LIS，最长上升子序列，无法做到O(n) time与O(1) space.

```js
var increasingTriplet = function(nums) {
    const dp = new Array(nums.length);
    dp.fill(1);
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        if (dp[i] >= 3) {
            return true;
        }
    }
    return false;
};
```

#### 分段递减法

再一次遍历中将nums分段，并递减最小值和次小值，如果成功分得3段返回true，否则返回false。

```js
var increasingTriplet = function(nums) {
    let small = Infinity, medium = Infinity;
    for (const num of nums) {
        if (num <= small) {
            small = num;
        } else if (num <= medium) {
            medium = num
        } else {
            return true;
        }
    }
    return false;
};
```

