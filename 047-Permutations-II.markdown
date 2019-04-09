#### BackTracking

```js
/**
 * BackTrack编程的范式
 * 主函数准备初始条件，将所有回溯和循环部分放到backtrack函数中
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const list = [];
    nums.sort();
    backtrack(list, [], nums);
    return list;
};

var backtrack = function(list, cur, nums) {
    if (nums.length === 0) {
        list.push(Array.from(cur));
        return;
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            const num = nums.splice(i, 1);
            cur.push(num[0]);
            backtrack(list, cur, nums);
            cur.pop();
            nums.splice(i, 0, num[0]);
        }
    }
}
```