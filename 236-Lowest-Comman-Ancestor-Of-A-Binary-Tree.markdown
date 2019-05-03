#### 回溯法

```js
/**
 * 解法3的思路，用recursion实现
 */
var lowestCommonAncestor = function(root, p, q) {
    var findPath = function(root, n, path) {
        if (root === null) {
            return ;
        }
        path.push(root);
        if (root === n) {
            return ;
        }

        findPath(root.left, n, path);
        findPath(root.right, n, path);

        if (path[path.length - 1] === n) {
            return ;
        }

        path.pop();
    }
    
    const qPath = [];
    findPath(root, q, qPath);
    const pPath = [];
    findPath(root, p, pPath);
    
    let i = 0;
    while (i < qPath.length && i < pPath.length && qPath[i] === pPath[i]) {
        i++;
    }
    
    return qPath[--i];
};
```

#### Recursion

```js
/**
 * 观察、利用性质：最低祖先k具有两种情况
 * 情况1： p和q刚好一个在k的左子树一个在k的右子树
 * 情况2： k为p或q，而另一个节点在k的左子树或右子树
 * 于是用一个recurse函数来check p 或 q是否是cur的后代，并在找到最低祖先k时设置
 */
var lowestCommonAncestor = function(root, p, q) {
    // check p 或 q 是否是 cur 的后代
    var recurse = function (cur, p, q) {
        if (cur === null) {
            return false;
        }
        
        const left = recurse(cur.left, p, q) ? 1 : 0;
        const right = recurse(cur.right, p, q) ? 1 : 0;
        const mid = cur === p || cur === q ? 1 : 0;
        
        if (left + mid + right === 2) {
            ans = cur;
        }
        
        if (left + mid + right > 0) {
            return true;
        }
        
        return false;
    }
    let ans = null;
    recurse(root, p, q);
    return ans;
};
```

#### Iteration && Parent Pointers && Dictionary

```js
var lowestCommonAncestor = function(root, p, q) {
    const stack = [];
    const parent = new Map();
    stack.push(root);
    parent.set(root, null);
    let node;
    while (!parent.has(p) || !parent.has(q)) {
        node = stack.pop();
        if (node && node.left) {
            parent.set(node.left, node);
            stack.push(node.left);
        }
        if (node && node.right) {
            parent.set(node.right, node);
            stack.push(node.right);
        }
    }
    
    const ancestors = new Set();
    while (p) {
        ancestors.add(p);
        p = parent.get(p);
    }
    
    while (!ancestors.has(q)) {
        q = parent.get(q);
    }
    
    return q;
};
```