#### Dynamic Programming

```js
var nthSuperUglyNumber = function(n, primes) {
    const superUgly = [1];
    const m = primes.length;
    const minArr = new Array(primes.length);
    minArr.fill(0);
    
    for (let i = 1; i < n; i++) {
        let tmp = Infinity;
        for (let j = 0; j < m; j++) {
            tmp = Math.min(tmp, superUgly[minArr[j]] * primes[j]);
        }
        for (let j = 0; j < m; j++) {
            if (tmp === superUgly[minArr[j]] * primes[j]) {
                minArr[j]++;
            }
        }
        superUgly.push(tmp);
    }
    
    return superUgly[n - 1];
};
```
