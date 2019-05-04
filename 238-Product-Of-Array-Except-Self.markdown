#### Easy for understanding

```js
/**
 * 观察，pattern
 * 左边乘积 * 右边乘积 = 结果
 */
var productExceptSelf = function(nums) {
    const left = new Array(nums.length);
    left[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }
    
    const right = new Array(nums.length);
    right[right.length - 1] = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }
    
    const output = new Array(nums.length);
    for (let i = 0; i < output.length; i++) {
        output[i] = left[i] * right[i];
    }
    return output;
};
```

#### O(1) space

```js
var productExceptSelf = function(nums) {
    const output = new Array(nums.length);
    output[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        output[i] = output[i - 1] * nums[i - 1];
    }
    let right = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= right;
        right *= nums[i];
    }
    return output;
};
```