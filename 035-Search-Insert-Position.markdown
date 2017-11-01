### 题目描述

#### 35.Search Insert Position

Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

    Here are few examples.
    [1,3,5,6], 5 → 2
    [1,3,5,6], 2 → 1
    [1,3,5,6], 7 → 4
    [1,3,5,6], 0 → 0

### 代码及思路

#### 我的代码及思路：

```java
/*
这个算法的时间复杂度是O(n)。

我的思路是通过比较差值绝对值大小来确定大致位置，再比较大小得到具体的位置。

查找的位置一定是在差值绝对值最小的数组元素的左/右，如果大于该数组元素就在右，否则在左。

不过由于调用Math.abs以及遍历了整个数组，效率依然不算高。
*/
public int searchInsert(int[] nums, int target) {
        int dValue = Math.abs(target - nums[0]);
        int pos = 0;
        for (int i = 0; i < nums.length; i++) {
            if (Math.abs(target - nums[i]) <= dValue) {
                dValue = Math.abs(target - nums[i]);
                if (target > nums[i]) {
                    pos = i + 1;
                } else {
                    pos = i;
                }
            }
        }
        return pos;
}
```

#### 学习到的代码及思路：

```java
public int searchInsert(int[] nums, int target) {
        int low = 0, high = A.length-1;
        while(low<=high){
            int mid = (low+high)/2;
            if(nums[mid] == target) return mid;
            else if(nums[mid] > target) high = mid-1;
            else low = mid+1;
        }
        return low;
}
```



