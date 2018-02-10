### 题目描述

#### 154. Find Minimum in Rotated Sorted Array II

    Follow up for "Find Minimum in Rotated Sorted Array":

    What if duplicates are allowed?

    Would this affect the run-time complexity? How and why?

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., `0 1 2 4 5 6 7` might become `4 5 6 7 0 1 2`).

Find the minimum element.

The array may contain duplicates.

### 代码及思路

#### 我的代码及思路：

```java
    /*
    我依然只想到了遍历来获得最小值...

    因为把问题想复杂了，后文细述。
    */
    public int findMin(int[] nums) {
        int min = 0;
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] <= nums[min]) min = i;
        }
        return nums[min];
    }
```

#### 学习到的代码及思路：

```java
    /*
    发现之前做此题I的时候把问题想复杂了。

    在题I没有重复的情况下，只需考虑mid和hi位置上的数值大小，就可以确定最小值所在的范围了。

    而此处，因为可以重复，所以只需在mid和hi位置上的数值相等时，将hi--，依然可以缩小范围。

    不断的缩小范围，直到lo==hi==min就找到了最小值。

    之所以不用lo++，是因为：
    
    首先在这样的情况下，无法确定lo是不是最小值，但可以确定的是hi不是最小值。

    其次，如果换一个方向，由于代码中的除法是向下取整的，所以在循环中，mid==lo可能会发生，导致lo作为最小值被跳过。

    此外要注意的是，二分查找可能会出现一个bug，即(lo + hi) / 2太大，超过了程序所能表示的整数范围，所以最佳实践是(lo + (hi - lo) / 2)
    */
    public int findMin(int[] nums) {
        int lo = 0;
        int hi = nums.length - 1;
        
        while (lo < hi) {
            int mid = lo + (hi - lo) / 2;
            if (nums[mid] < nums[hi]) {
                hi = mid;
            }
            else if(nums[mid] > nums[hi]) {
                lo = mid + 1;
            }
            else {
                hi--;
            }
        }
        
        return nums[lo];
    }
```