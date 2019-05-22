### DFS

词典序其实就可以看作是

        1         2        3     ...
        /\        /\       /\
    10 ...19  20...29  30...39   ....
    ....................n..............

的前序遍历，因此用DFS可以轻松的求到结果。


```js
var lexicalOrder = function(n) {
    const res = [];
    for (let i = 1; i <= 9; i++) {
        dfs(i, n, res);
    }
    return res;
};

var dfs = function(cur, n, res) {
    if (cur <= n) {
        res.push(cur);
    }
    
    for (let i = 0; i <= 9; i++) {
        if (cur * 10 + i > n) {
            return ;
        }
        dfs(cur * 10 + i, n, res);
    }
    
    return ;
}
```