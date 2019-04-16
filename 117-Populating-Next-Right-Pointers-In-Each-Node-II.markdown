#### Concise Level-Order traverse Using constant extra space

```js
/**
 * 层级遍历，每次循环从已遍历的上层处理未遍历的下层
 */
var connect = function(root) {
    let cur = root;
    let head = null;
    let leading = null;
    
    while (cur) {
        while (cur) {
            if (cur.left) {
                if (leading) {
                    leading.next = cur.left;
                } else {
                    head = cur.left
                }
                leading = cur.left;
            }
            
            if (cur.right) {
                if (leading) {
                    leading.next = cur.right;
                } else {
                    head = cur.right;
                }
                leading = cur.right;
            }
            cur = cur.next;
        }
        cur = head;
        head = null;
        leading = null;
    }
    return root;
};
```