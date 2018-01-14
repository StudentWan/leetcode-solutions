### 题目描述

#### 41. First Missing Positive

Given an unsorted integer array, find the first missing positive integer.

For example,
Given `[1,2,0]` return `3`,
and `[3,4,-1,1]` return `2`.

Your algorithm should run in O(n) time and uses constant space.

### 代码及思路：

#### 我的代码及思路：

```java
    /*
    本算法是从1开始寻找连续的正整数，最后得到的是最接近first missing positive的数。

    然而由于要回溯未遍历到的情况，时间复杂度其实是O(n ^ 2)。
    */
    public int firstMissingPositive(int[] nums) {
        int closest = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == closest + 1) {
                closest = nums[i];
                i = -1;
            }
        }
        return closest + 1;
    }
```

#### 学习到的代码及思路：

```java
    /*
    本算法很巧妙，时间复杂度是O(n)。

    首先思考题目及条件的本质。

    第一个缺失的正整数，最小是1，最大是nums.length + 1。

    因为一个长度为n的数组，它得到结果nums.length + 1的情况是：1, 2, 3, ... , n

    于是我们可以得到一个思路：只要把在[1, n]之内的正整数，把它放在它应有的位置上。

    第一个不在位置上的正整数，就是第一个缺失的正整数。

    不需要在意元素小于0或者大于nums.length的情况，它们对解题没有影响。

    于是我们对数组进行遍历，如果找到[1, n]之间的正整数，并且它不在应该在的位置上(即：nums[nums[i] - 1] != nums[i])，就把它与该位置上的数交换。

    这样做可以避免duplicates造成的影响，如果位置上已有正确的数了，就不用再交换。

    对交换后的数也要检查，它可能仍不在位置上。

    这个算法告诉我，观察题目及条件的本质，think!
    */
    public int firstMissingPositive(int[] nums) {
        int i = 0;
        while (i < nums.length) {
            if (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] != nums[i]) swap(nums, i, nums[i] - 1);
            else i++;
        }
        
        int j = 0;
        while (j < nums.length) {
            if (nums[j] != j + 1) break;
            j++;
        }
        
        return j + 1;
    }
        
    public void swap(int[] nums, int indexBefore, int indexAfter) {
        int temp = nums[indexBefore];
        nums[indexBefore] = nums[indexAfter];
        nums[indexAfter] = temp;
    }
```

