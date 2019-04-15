#### DFS

```js
/**
 * 为了避免多次的重复遍历
 * 保留对上界和下界的引用
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    if (root === null) {
        return true;
    }
    
    return isBSTHelper(root, null, null);
};

var isBSTHelper = function(root, lower_limit, upper_limit) {
    if (lower_limit !== null && root.val <= lower_limit) {
        return false;
    }
    if (upper_limit !== null && root.val >= upper_limit) {
        return false;
    }
    
    let left, right;
    
    if (root.left === null) {
        left = true;
    } else {
        left = isBSTHelper(root.left, lower_limit, root.val);
    }
    
    if (root.right === null) {
        right = true;
    } else {
        right = isBSTHelper(root.right, root.val, upper_limit);
    }
    
    return left && right;
}
```

#### Inorder Traverse

```js
/**
 * 因为中序遍历是 Left -> Node -> Right
 * 因此对于BST来说，中序序列中的a[i - 1] < a[i] 必然成立
 * 同理可证其逆命题也成立
 * 因此，保存中序序列中的一个值（节省空间），与下一个值比较，即可确定BST
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    const stack = [];
    let inorder = -Infinity;
    
    while (stack.length !== 0 || root !== null) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (root.val <= inorder) {
            return false;
        }
        inorder = root.val;
        root = root.right;
    }
    return true;
};
```