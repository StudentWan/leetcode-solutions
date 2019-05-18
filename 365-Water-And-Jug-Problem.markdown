#### Math

使用辗转相除法求得最大公约数。

然后利用裴蜀定理确定结果。

```js
var canMeasureWater = function(x, y, z) {
    if (z < 0 || z > x + y) {
        return false;
    }
    
    if (z === 0 || z === x || z === y) {
        return true;
    }
    
    return z % gcd(x, y) === 0;
};

var gcd = function(x, y) {
    let tmp;
    while (y !== 0) {
        tmp = y;
        y = x % y;
        x = tmp;
    }
    return x;
}
```