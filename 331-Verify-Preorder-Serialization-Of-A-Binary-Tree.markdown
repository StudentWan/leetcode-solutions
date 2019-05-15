#### 前序序列性质 - Bottom Up

```js
var isValidSerialization = function(preorder) {
    const serial = preorder.split(',');
    let n = serial.length - 1;
    while (n >= 2 && serial[n] === '#' && serial[n - 1] === '#') {
        while (serial[n] === '#' && serial[n - 1] === '#') {
            if (serial[n - 2] !== '#') {
                serial.splice(n - 2, 3, '#');
                n -= 2;   
            } else {
                n--;
            }
        }
        n = serial.length - 1;
    }
    
    if (serial.length === 1 && serial[0] === '#') {
        return true;
    }
    
    return false;
};
```

#### 前序序列性质 - diff between outdegree and indegree

观察前序序列，可以得到以下性质:

1. diff永远不可能小于0
2. diff最终等于0 
3. null node提供0 outdegrees, 非空node提供2 outdegrees

```js
var isValidSerialization = function(preorder) {
    const nodes = preorder.split(',');
    let diff = 1;
    for (const node of nodes) {
        if (--diff < 0) {
            return false;
        }
        if (node !== '#') {
            diff += 2;
        }
    }
    return diff === 0;
};
```