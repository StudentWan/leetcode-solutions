### 题目描述

#### 33. Search in Rotated Sorted Array

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., `0 1 2 4 5 6 7` might become `4 5 6 7 0 1 2`).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

### 代码及思路：

#### 我的代码及思路：

```java
    /*
    本算法是线性O(n)算法

    遍历即可。
    */
    public int search(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == target) {
                return i;
            }
        }
        return -1;
    }
```

#### 学习到的代码及思路:

```java
    /*
    本算法利用数组部分有序的特征，采用二分查找进行search，时间复杂度为O(log2n).

    不过由于比较操作过多，实际表现还不如直接遍历...
    */
    public int search(int[] nums, int target) {
        if (nums.length == 0) return -1;
        int lo = 0;
        int hi = nums.length - 1;
        
        while (lo < hi) {
            int mid = (lo + hi) / 2;
            if (nums[mid] == target) return mid;
            
            if (nums[lo] <= nums[mid]) {
                if (target >= nums[lo] && target < nums[mid]) {
                    hi = mid - 1;
                } else {
                    lo = mid + 1;
                }
            } else {
                if (target > nums[mid] && target <= nums[hi]) {
                    lo = mid + 1;
                } else {
                    hi = mid - 1;
                }
            }
        }
        return nums[lo] == target ? lo : -1;
    }
```

