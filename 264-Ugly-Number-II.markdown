#### Dynamic Programming

```js
/**
 * 一种比较Intuitive的思路是对每一个number检查isUgly
 * 但是，由于绝大多数数字并非ugly数，因此，如此做法造成大量时间开销浪费
 * 所以，考虑ugly number都是由更小的ugly number通过*2 *3 或 *5得到的
 * 又及，可以考虑保存3个有序列表，保存 *2 *3 和 *5 到目前为止的最小值
 * 所以由U(k)可以得到U(k+1)
 * 满足最优子结构性质
 * 并且，得到u(k+1)后，如何得到它不再重要，满足无后效性
 * 因此只需找出由min2 min3 min5构成的递推式，并寻找到min2 min3 min5的更新机制，即可用DP解决此问题。
 */
var nthUglyNumber = function(n) {
    const ugly = [1];
    let min2 = 0;
    let min3 = 0;
    let min5 = 0;
    let min;
    for (let i = 1; i < n; i++) {
        min = Math.min(Math.min(ugly[min2] * 2, ugly[min3] * 3), ugly[min5] * 5);
        ugly.push(min);
        if (min === ugly[min2] * 2) {
            min2++;
        }
        if (min === ugly[min3] * 3) {
            min3++;
        }
        if (min === ugly[min5] * 5) {
            min5++;
        }
    }
    return ugly[n - 1];
};
```