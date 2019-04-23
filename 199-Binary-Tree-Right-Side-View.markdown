此题用于学习bfs和dfs思想颇有用处。

#### bfs

```js
/**
 * Pretty straight forward 的算法
 */
var rightSideView = function(root) {
    const res = [];
    if (root === null) {
        return res;
    }
    const q = [];
    q.push(root);
    let len;
    let node;
    while (q.length > 0) {
        len = q.length;
        for (let i = 0; i < len; i++) {
            node = q.shift();
            if (i === len - 1) {
                res.push(node.val);
            }
            if (node.left) {
                q.push(node.left);
            }
            if (node.right) {
                q.push(node.right);
            }
        }
    }
    return res;
};
```

#### dfs

```js
/**
 * dfs解法
 * 在递归中利用curDepth和res记录状态
 * 先递归右子树，后递归左子树
 */
var rightSideView = function(root) {
    const res = [];
    dfs(root, res, 0);
    return res;
};

var dfs = function(cur, res, curDepth) {
    if (cur === null) {
        return ;
    }
    
    if (curDepth === res.length) {
        res.push(cur.val);
    }
    
    dfs(cur.right, res, curDepth + 1);
    dfs(cur.left, res, curDepth + 1);
}
```