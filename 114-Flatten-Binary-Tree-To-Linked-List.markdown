#### post order traverse

```js
/**
 * 与容易想到的前序遍历思路刚好相反
 * 使用后序遍历来做recursion展开
 * 保存已展开树的根节点，每次展开节点的右子树指向prev，左子树指向null
 * 想出该方法的人对树的后序遍历性质与递归编程理解甚深
 */
var flatten = function(root) {
    let prev = null;
    
    function insideFlatten(root) {
        if (root === null) {
            return ;
        }
        insideFlatten(root.right);
        insideFlatten(root.left);
        root.right = prev;
        root.left = null;
        prev = root;
    }
    insideFlatten(root);
};
```