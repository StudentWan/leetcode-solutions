#### Floyd's Cycle detection

```js
var findDuplicate = function(nums) {
    let slow = nums[0];
    let fast = nums[0];
    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];
        
        if (slow === fast) {
            break;
        }
    }
    
    let another = nums[0];
    while (another != slow) {
        another = nums[another];
        slow = nums[slow];
    }
    
    return slow;
};
```
