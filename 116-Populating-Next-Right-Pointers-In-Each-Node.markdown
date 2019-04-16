#### DFS

```JS
var connect = function(root) {
    if (root === null) {
        return root;
    }
    
    if (root.left) {
        root.left.next = root.right;
        if (root.next) {
            root.right.next = root.next.left;
        }
    }
    connect(root.left);
    connect(root.right);
    return root;
};
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