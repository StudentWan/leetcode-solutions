#### Bit manipulation

```js
/**
 * 基于事实判断：如果 m !== n，则m和n之间一定有奇数有偶数
 * 奇偶数的最低位AND，结果为0
 * 因此 如果 m !== n，将m与n右移一位，并记录右移次数
 * 直到m === n，将结果重新左移
 * 总结: Bit操纵的题目，关键点有两点：1.深入理解位运算的特质 2.观察操作和操作数的规律
 */
var rangeBitwiseAnd = function(m, n) {
    if (m === 0) {
        return 0;
    }
    let moveFactor = 1;
    while (m !== n) {
        m >>= 1;
        n >>= 1;
        moveFactor <<= 1;
    }
    return m * moveFactor;
};
```