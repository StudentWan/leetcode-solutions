#### Brute-Force

一种比较直白的暴搜。

```js
var findMinHeightTrees = function(n, edges) {
    const map = new Map();
    createMap(map, edges, n);
    
    let min = Infinity;
    const bucket = new Array(n);
    
    for (let i = 0; i < n; i++) {
        const queue = [];
        queue.push(i);
        const visited = new Array(n);
        visited.fill(-1);
        let height = 0;
        while (queue.length > 0) {
            height++;
            const tmp = [];
            while (queue.length > 0) {
                tmp.push(queue.shift());
            }
            for (const node of tmp) {
                visited[node] = 0;
                for (const neighbor of map.get(node)) {
                    if (visited[neighbor] === -1) {
                        queue.push(neighbor);
                    }
                }
            }
        }
        min = Math.min(min, height);
        bucket[i] = height;
    }
    
    const res = [];
    for (let i = 0; i < n; i++) {
        if (bucket[i] === min) {
            res.push(i);
        }
    }
    
    return res;
};

var createMap = function(map, edges, n) {
    for (let i = 0; i < n; i++) {
        map.set(i, []);
    }
    
    for (const edge of edges) {
        map.get(edge[0]).push(edge[1]);
        map.get(edge[1]).push(edge[0]);
    }
}
```

#### Longest-path

根据性质：MHT最多有两棵，且就是中间折断那种，因此，用类似于Topo Sort的BFS，从leaves开始求最长路径，剩下的1或2个节点就是MHT的根节点。

```js
var findMinHeightTrees = function(n, edges) {
    const adj = new Array(n);
    for (let i = 0; i < n; i++) {
        adj[i] = new Set();
    }
    
    for (const edge of edges) {
        adj[edge[0]].add(edge[1]);
        adj[edge[1]].add(edge[0]);
    }
    
    let leaves = [];
    for (let i = 0; i < n; i++) {
        // 0 处理没有边的情况
        if (adj[i].size === 1 || adj[i].size === 0) {
            leaves.push(i);
        }
    }
    
    while (n > 2) {
        n -= leaves.length;
        const newLeaves = [];
        for (const leaf of leaves) {
            const j = adj[leaf].values().next().value;
            adj[j].delete(leaf);
            if (adj[j].size === 1) {
                newLeaves.push(j);
            }
        }
        leaves = newLeaves;
    }
    
    return leaves;
};
```
