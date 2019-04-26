#### Dynamic Programming

```js
/**
 * 分治，再动态规划
 * 仔细体会
 */
var rob = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0];
    }
    return Math.max(makeRob(nums, 0, nums.length - 2), makeRob(nums, 1, nums.length - 1));
};

var makeRob = function(nums, lo, hi) {
    let prevNo = 0;
    let prevYes = 0;
    let tmp;
    for (let i = lo; i <= hi; i++) {
        tmp = prevNo;
        prevNo = Math.max(prevNo, prevYes);
        prevYes = nums[i] + tmp;
    }
    return Math.max(prevNo, prevYes);
}
```