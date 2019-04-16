#### DFS

```JS
/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    recur(root, null);
    return root;
};

var recur = function(left, right) {
    if (left !== null && right === null) {
        recur(left.left, left.right);
        return ;
    }
    if (left === null && right === null) {
        return ;
    }
    
    left.next = right;
    if (left.left !== null) {
        recur(left.left, left.right);
        recur(left.right, right.left);
        recur(right.left, right.right);
    }
    return;
}
```

#### 逐层遍历

```js
/**
 * 一层层的遍历，每遍历一层，连接其下一层的节点
 * 设置两个辅助变量store和cur来完成遍历
 * 思想类似于BFS
 */
var connect = function(root) {
    if (root === null) {
        return root;
    }
    
    let store = root;
    let cur;
    
    while (store.left) {
        cur = store;
        while (cur) {
            cur.left.next = cur.right;
            if (cur.next) cur.right.next = cur.next.left;
            cur = cur.next;
        }
        store = store.left;
    }
    return root;
};
```