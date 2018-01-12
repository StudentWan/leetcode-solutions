### 题目描述

#### 162. Find Peak Element

A peak element is an element that is greater than its neighbors.

Given an input array where `num[i] ≠ num[i+1]`, find a peak element and return its index.

The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

You may imagine that `num[-1] = num[n] = -∞`.

For example, in array `[1, 2, 3, 1]`, 3 is a peak element and your function should return the index number 2.

`Note:`

Your solution should be in logarithmic complexity.

### 代码及思路：

#### 我的代码及思路：

```java
    /*
    首先明确的是一个数组里肯定会存在peak，如果不在0或者n-1，就在中间。

    于是先去除掉特殊元素。

    然后在对[1, n - 2]遍历的过程中，如果nums[i] > nums[i - 1]，那么i - 1肯定不是peak，可以排除

    没有做到O(logn)，只是相对于纯粹的O(n)进行了优化。
    */
    public int findPeakElement(int[] nums) {
        int n = nums.length;
        
        if (nums.length == 1 || nums[0] > nums[1]) return 0;
        if (nums[n - 1] > nums[n - 2]) return n - 1;
        
        for (int i = n - 2; i > 0; i--) {
            if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) return i;
            else if (nums[i] > nums[i - 1]) i--;
        }
        
        return 0;
    }
```