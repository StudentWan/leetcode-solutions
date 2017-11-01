### 题目描述

#### 27. Remove Element

Given an array and a value, remove all instances of that value in place and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

#### Example:

    Given input array nums = [3,2,2,3], val = 3

    Your function should return length = 2, with the first two elements of nums being 2.

### 代码及思路

```java
/*
本算法的时间复杂度是O(n)。

采用的是Two Pointer的思路，就十分简单，用不应该被remove的element按序覆盖数组就可以了。
*/
public int removeElement(int[] nums, int val) {
        int i = 0;
        for (int j = 0; j < nums.length; j++) {
            if (nums[j] != val) {
                nums[i] = nums[j];
                i++;
            }
        }
        return i;
}
```