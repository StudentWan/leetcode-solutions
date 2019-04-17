#### 异常优雅的DFS

```js
/**
 * 不要说话，去体会。
 */
var sumNumbers = function(root) {
    return sum(root, 0);
};

var sum = function(root, s) {
    if (root === null) return 0;
    if (root.left === null && root.right === null) return s * 10 + root.val;
    return sum(root.left, s * 10 + root.val) + sum(root.right, s * 10 + root.val);
}
```