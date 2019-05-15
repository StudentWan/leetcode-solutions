#### DFS

一种比较straight forward的解法，但时间开销是指数级的。

```js
var rob = function(root) {
    if (root === null) {
        return 0;
    }
    
    let max1 = rob(root.left) + rob(root.right);
    
    let max2 = root.val;
    if (root.left) {
        max2 += (rob(root.left.left) + rob(root.left.right));
    }
    if (root.right) {
        max2 += (rob(root.right.left) + rob(root.right.right));
    }
    
    return Math.max(max1, max2);
};
```

#### Memorization

分析第一种解法可知，算法中包含了大量的重叠子问题，因此可以用HashMap作为memorization，使用一种类似于DP的想法，来降低时间开销。

这样的做法即为空间换时间，空间复杂度为O(n)。

```js
var rob = function(root) {
    const dp = new Map();
    return robRecur(root, dp);
};

var robRecur = function(root, dp) {
    if (root === null) {
        return 0;
    }
    
    if (dp.has(root)) {
        return dp.get(root);
    }
    
    let max1 = robRecur(root.left, dp) + robRecur(root.right, dp);
    let max2 = root.val;
    if (root.left) {
        max2 += (robRecur(root.left.left, dp) + robRecur(root.left.right, dp));
    }
    if (root.right) {
        max2 += (robRecur(root.right.left, dp) + robRecur(root.right.right, dp));
    }
    
    let max = Math.max(max1, max2);
    dp.set(root, max);
    
    return max;
} 
```

#### Dynamic Programming

分析前两种算法。

DFS算法出现重叠子问题的原因在于往下递归时，没有携带如何rob的具体信息。

将rob(root)扩展为一个亚问题，该问题返回一个数组res，res[0]表示root被rob时的最大值，res[1]表示root不被rob时的最大值。

如此携带额外信息，利用状态转移方程完成向下递归，消除重叠子问题，降低时间开销和空间开销。

```js
var rob = function(root) {
    const res = robSub(root);
    return Math.max(res[0], res[1]);
};

var robSub = function(root) {
    if (root === null) {
        return [0, 0];
    }
    
    const left = robSub(root.left);
    const right = robSub(root.right);
    
    const res = new Array(2);
    res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    res[1] = root.val + left[0] + right[0];
    
    return res;
}
```