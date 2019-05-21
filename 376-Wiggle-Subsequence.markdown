#### Greedy

需要注意的是当遇到pOrn[i] === 0时，需要将pOrn[i]修改为pOrn[i - 1]，以保持前序的增长/降低特性。

```js
var wiggleMaxLength = function(nums) {
    if (nums.length < 2) {
        return nums.length;
    }
    
    const pOrn = [];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] > 0) {
            pOrn.push(1);
        } else if (nums[i] - nums[i - 1] === 0) {
            pOrn.push(0);
        } else {
            pOrn.push(-1);
        }
    }    
    
    let len = nums.length;
    if (pOrn[0] === 0) {
        len--;
    }
    for (let i = 1; i < pOrn.length; i++) {
        if (pOrn[i] === 0) {
            pOrn[i] = pOrn[i - 1];
            len--;
        } else if (pOrn[i] === pOrn[i - 1]) {
            len--;
        }
    }
    return len;
};
```

#### Dynamic Programming

up[i]，以[i]元素为最后一个元素，最长的增长Wiggle sequence长度

down[i]，以[i]元素为最后一个元素，最长的下降Wiggle sequence长度

**存在多种状态时，保存多种状态的信息来完成DP**

```js
var wiggleMaxLength = function(nums) {
    if (nums.length < 2) {
        return nums.length;
    }
    
    const up = new Array(nums.length);
    const down = new Array(nums.length);
    up.fill(1);
    down.fill(1);
    
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                up[i] = Math.max(up[i], 1 + down[j]);
            } else if (nums[i] < nums[j]) {
                down[i] = Math.max(down[i], 1 + up[j]);
            }
        }
    }
    
    return Math.max(up[nums.length - 1], down[nums.length - 1]);
};
```

#### Linear Dynamic Programming

assume down[i-1] end with a

if down[i-1] not end with nums[i-1]

then nums[i-1] must > a, so nums[i] > nums[i-1] > a

then up[i] = down[i-1]+1 is still valid.

```js
var wiggleMaxLength = function(nums) {
    if (nums.length < 2) {
        return nums.length;
    }
    
    const up = new Array(nums.length);
    const down = new Array(nums.length);
    
    up[0] = 1;
    down[0] = 1;
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            up[i] = down[i - 1] + 1;
            down[i] = down[i - 1];
        } else if (nums[i] < nums[i - 1]) {
            down[i] = up[i - 1] + 1;
            up[i] = up[i - 1];
        } else {
            up[i] = up[i - 1];
            down[i] = down[i - 1];
        }
    }
    
    return Math.max(up[nums.length - 1], down[nums.length - 1]);
};
```