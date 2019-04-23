#### Union-Find（并查集算法）

```js
/**
 * 一个典型的可以用并查集算法解决的问题
 * 将一个email抽象为一个触点，存在一个account中的所有触点连通
 * 最后检查连通分量的数目和包含的触点
 * 本算法连通一个分量的方法是将一个account中的所有触点与account中的第一个email连通
 * 此外，需要几个HashMap来保存name和并查集中对应的id
 * 总结：并查集算法的关键就在于，寻找并抽象触点，问题描述中的什么信息可以作为触点来表达连通性，找到这个关键因素，剩下的代码就迎刃而解了
 */
var accountsMerge = function(accounts) {
    const uf = new UF();
    const emailToName = new Map();
    const emailToId = new Map();
    
    let id = 0;
    
    for (const account of accounts) {
        let name = '';
        for (const email of account) {
            if (name === '') {
                name = email;
                continue;
            }
            emailToName.set(email, name);
            if (!emailToId.has(email)) {
                emailToId.set(email, id++);
            }
            uf.union(emailToId.get(account[1]), emailToId.get(email));
        }
    }
    
    const ans = new Map();
    for (const email of emailToName.keys()) {
        let index = uf.find(emailToId.get(email));
        if (!ans.has(index)) {
            ans.set(index, []);
        }
        ans.get(index).push(email);
    }
    
    const res = [];
    for (const arr of ans.values()) {
        arr.sort();
        arr.unshift(emailToName.get(arr[0]));
        res.push(arr);
    }
    
    return res;
};

class UF {
    constructor() {
        this.id = new Array(10000);
        for (let i = 0; i < this.id.length; i++) {
            this.id[i] = i;
        }
    }
    
    find(p) {
        while (this.id[p] !== p) {
            p = this.id[p];
        }
        return p;
    }
    
    union(p, q) {
        let pRoot = this.find(p);
        let qRoot = this.find(q);
        
        if (pRoot === qRoot) {
            return ;
        }
        
        this.id[qRoot] = pRoot;
    }
}
```