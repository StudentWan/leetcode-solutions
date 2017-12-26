### 题目描述

#### 81. Search in Rotated Sorted Array II

    Follow up for "Search in Rotated Sorted Array":
    What if duplicates are allowed?
    Would this affect the run-time complexity? How and why?

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., `0 1 2 4 5 6 7` might become `4 5 6 7 0 1 2`).

Write a function to determine if a given target is in the array.

The array may contain duplicates.

### 代码及思路：

#### 我的代码及思路：

```java
    /*
    最直观的遍历查找。
    */
    public boolean search(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == target) {
                return true;
            }
        }
        return false;
    }
```

#### 学习到的代码及思路：

```java
    /*
    本算法是结合033的解题思路以及DISCUSS区的讨论完成的，也算是学习到的吧。

    直接遍历数组虽然是最直观的，但是由于我们得到的nums是在一个支点两边有序的，所以直接遍历肯定会造成性能损失。

    要避免性能的损失，我们要做的就有两点：1. 找到有序的部分，2.对有序的部分进行二分查找

    于是我们设置一个lo指针，一个hi指针，mid指针为 (lo + hi) / 2

    如果nums[lo] < nums[mid]，那么mid左边一定是有序的，这时如果target在nums[lo]和nums[mid]之间，则转换成有序数组的二分查找了。

    如果nums[lo] > nums[mid]，那么mid右边一定是有序的，这时如果target在nums[mid]和nums[hi]之间，则转换成有序数组的二分查找了。

    如果nums[lo] == nums[mid]，则可以直接丢弃掉nums[lo]了，这种情况就是duplicates给算法带来的性能损失。

    时间复杂度为O(log2n)。
    */
    public boolean search(int[] nums, int target) {
        if (nums.length == 0) return false;
        int lo = 0;
        int hi = nums.length - 1;
        
        while (lo < hi) {
            int mid = (lo + hi) / 2;
            if (nums[mid] == target) return true;
            if (nums[lo] < nums[mid]) {
                if (target >= nums[lo] && target < nums[mid]) {
                    hi = mid - 1;
                }
                else {
                    lo = mid + 1;
                }
            }
            else if (nums[lo] > nums[mid]){
                if (target > nums[mid] && target <= nums[hi]) {
                    lo = mid + 1;
                }
                else {
                    hi = mid - 1;
                }
            }
            else {
                lo++;
            }
        }
        return nums[lo] == target;
    }
```