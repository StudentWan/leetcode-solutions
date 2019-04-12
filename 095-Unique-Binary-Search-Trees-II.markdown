#### Dynamic Programming

```js
/**
 * 这是一个隐藏比较深的DP问题
 * 观察可证其最优子结构和无后效性
 * 需要仔细推导其状态转移式
 * 另外注意，不需要的状态可以不用存储
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    let dp = [];
    if (n === 0) {
        return dp;
    }
    const root = new TreeNode(1);
    dp.push(root);
    for (let i = 2; i <= n; i++) {
        const newDp = [];
        for (let j = 0; j < dp.length; j++) {
            let root = copy(dp[j]);
            let cur = root;
            while (cur !== null) {
                const tmp = cur.right;
                cur.right = new TreeNode(i);
                cur.right.left = tmp;
                newDp.push(root);
                root = copy(dp[j]);
                cur = root;
                if (tmp === null) {
                    cur = null;
                } else {
                    while (cur.right.val !== tmp.val) {
                        cur = cur.right;
                    }
                    cur = cur.right;
                }
            }
            cur = new TreeNode(i);
            cur.left = copy(dp[j]);
            newDp.push(cur);
        }
        dp = newDp;
    }
    return dp;
};

var copy = function(tree) {
    if (tree === null) {
        return null;
    }
    
    const ret = new TreeNode(tree.val);
    ret.left = copy(tree.left);
    ret.right = copy(tree.right);
    return ret;
}
```