#### Iteration

```js
/**
 * 格雷码的迭代思路
 * 序列可以迭代生成
 * 例如，从n=2：(00,01,11,10)到n=3:(000,001,011,010)(110,111,101,100)
 * 右半部分将最高位设置为1，低位与左半部分完全对称，由此可以迭代求得
 */
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    const res = [];
    res.push(0);
    for (let i = 0; i < n; i++) {
        const len = res.length;
        for (let j = len - 1; j >= 0; j--) {
            res.push(res[j] | 1 << i);
        }
    }
    return res;
};
```