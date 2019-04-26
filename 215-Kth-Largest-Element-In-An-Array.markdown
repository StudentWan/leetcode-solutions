#### Partition

```js
/**
 * 在Knuth Shuffle算法的前提下，该算法可以保证O(n)的时间复杂度。
 */
var findKthLargest = function(nums, k) {
    k = nums.length - k;
    let lo = 0;
    let hi = nums.length - 1;
    
    while (lo < hi) {
        let j = partition(nums, lo, hi);
        
        if (j < k) {
            lo = j + 1;
        } else if (j > k) {
            hi = j - 1;
        } else {
            break;
        }
    }
    return nums[k];
};

var partition = function(nums, lo, hi) {
    let v = nums[lo];
    let i = lo, j = hi + 1;
    let tmp;
    while (true) {
        while (i < hi && nums[++i] < v);
        while (nums[--j] > v);
            
        if (i >= j) {
            break;
        }
        
        tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
    
    tmp = nums[j];
    nums[j] = v;
    nums[lo] = tmp;
    
    return j;
};
```