#### Hash Set

O(n^3)的解法，用HashSet作为Bucket，无法在O(1)的时间内比较两个单词是否有重叠

```js
var maxProduct = function(words) {
    if (words.length === 0) {
        return 0;
    }
    const mySet = new Set();
    words.sort((a, b) => b.length - a.length);
    const max = [];
    max[0] = 0;
    for (let i = 1; i < words.length; i++) {
        for (let j = 0; j < max.length; j++) {
            if (words[i].length <= max[j]) {
                continue;
            }
            if (!isIntersect(words[i], words[j])) {
                max[j] = words[i].length;
            }
        }
        max.push(0);
    }
    let res = 0;
    for (let i = 0; i < max.length; i++) {
        res = Math.max(res, max[i] * words[i].length);
    }
    return res;
    
    function isIntersect(w1, w2) {
        let res = false;
        for (let i = 0; i < w1.length; i++) {
            mySet.add(w1[i]);
        }
        
        for (let i = 0; i < w2.length; i++) {
            if (mySet.has(w2[i])) {
                res = true;
                break;
            }
        }
        mySet.clear();
        return res;
    }
};
```

#### Bit Manipulation

Very brilliant solution，借助位运算的优势，使用一个整数作为bucket，整数的bit作为字符的存储空间，可以实现在O(1)时间内比较两个单词是否重叠，从而将算法整体的时间复杂度降低到O(n^2)。

使用整数作为bucket，使用bit存储信息，非常有用的知识。

```js
var maxProduct = function(words) {
    if (words.length === 0) {
        return 0;
    }
    const buckets = new Array(words.length);
    let tmp;
    for (let i = 0; i < words.length; i++) {
        tmp = words[i];
        buckets[i] = 0;
        for (let j = 0; j < tmp.length; j++) {
            // 1 左移 x 位
            buckets[i] |= 1 << (tmp.charCodeAt(j) - 97);
        }
    }
    
    let maxProduct = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if ((buckets[i] & buckets[j]) === 0 && words[i].length * words[j].length > maxProduct) {
                maxProduct =  words[i].length * words[j].length;
            }
        }
    }
    
    return maxProduct;
};
```