#### Straight forward

```js
var hIndex = function(citations) {
    citations.sort((a, b) => a - b);
    const len = citations.length;
    let h = 0;
    for (let i = len - 1; i >= 0; i--) {
        if (i > 0) {
            if (len - i <= citations[i] && len - i >= citations[i - 1]) {
                h = len - i;
            } 
        } else {
            if (len - i <= citations[i]) {
                h = len - i;
            }
        }
       
    }
    return h;
};
```

#### Bucket Sort

```js
var hIndex = function(citations) {
    const n = citations.length;
    const bucket = new Array(n + 1);
    bucket.fill(0);
    citations.forEach(c => {
        if (c > n) {
            bucket[n]++;
        } else {
            bucket[c]++;
        }
    });
    
    let count = 0;
    for (let i = n; i > 0; i--) {
        count += bucket[i];
        if (count >= i) {
            return i;
        }
    }
    return 0;
};
```
