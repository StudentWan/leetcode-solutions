#### Iteratively - Solution 1

```js
/**
 * 我自己想到的算法，根据前序遍历与stack先进后出特性的匹配，只将右子树入栈。
 */
var preorderTraversal = function(root) {
    const res = [];
    if (!root) {
        return res;
    }
    
    const stack = [];
    stack.push(root);
    
    while (stack.length > 0) {
        let n = stack.pop();
        while (n) {
            res.push(n.val);
            if (n.right) {
                stack.push(n.right);
            }
            n = n.left;
        }
    }
    
    return res;
};
```

#### Iteratively - Solution 2

```js
/**
 * 根据前序遍历和stack先进后出特性的匹配，使用stack存储未遍历的节点。
 * 然后先将右子树入栈，再将左子树入栈。
 */
var preorderTraversal = function(root) {
    const res = [];
    if (root === null) {
        return res;
    }
    const stack = [];
    stack.push(root);
    
    while (stack.length > 0) {
        const node = stack.pop();
        res.push(node.val);
        if (node.right) {
            stack.push(node.right);
        }
        if (node.left) {
            stack.push(node.left);
        }
    }
    
    return res;
};
```