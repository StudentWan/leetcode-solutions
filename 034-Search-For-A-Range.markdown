### 题目描述

#### 34. Search for a Range

Given an array of integers sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return `[-1, -1]`.

For example,
Given `[5, 7, 7, 8, 8, 10]` and target value 8,
return `[3, 4]`.

### 代码及思路：

#### 我的代码及思路1：

```java
    /*
    暴搜，时间复杂度为O(n)，实际上不符合题意，但是AC了。
    */
    public int[] searchRange(int[] nums, int target) {
        int[] res = new int[2];
        res[0] = -1;
        res[1] = -1;
        if (nums.length == 0) return res;
        if (nums[0] == target) res[0] = 0;
        if (nums[nums.length - 1] == target) res[1] = nums.length - 1;
        for (int i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i - 1] != target && nums[i] == target) {
                res[0] = i;
            }
            
            if (i < nums.length - 1 && nums[i + 1] != target && nums[i] == target) {
                res[1] = i;
            }
        }
        return res;
    }
```

#### 我的代码及思路2：

```java
    /*
    通过二分查找寻找target所在的index，但是寻找start和end的遍历时间复杂度不是O(log2n)，所以依然没有满足题意。
    */
    public int[] searchRange(int[] nums, int target) {
        int lo = 0;
        int hi = nums.length - 1;
        int[] res = new int[]{-1, -1};
        
        if (nums.length == 0) return res;
        
        while (lo < hi) {
            int mid = (lo + hi) / 2;
            if (nums[mid] == target) {
                lo = mid;
                break;
            }
            if (nums[mid] < target) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
        
        if (nums[lo] != target) return res;
        
        int start = lo;
        int end = lo;
        
        while(start > 0 && nums[start] == nums[start - 1]) start--;
        while(end < nums.length - 1 && nums[end] == nums[end + 1]) end++;
            
        res[0] = start;
        res[1] = end;
        return res;
    }
```

#### 学习到的代码及思路：

```java
    /*
    本算法的时间复杂度为O(log2n)

    想法就是设计一个函数，该函数通过二分查找寻找第一个大于或等于target的元素的索引。

    如果target不是大于nums中的所有数的话，那么hi一定是大于等于target的，于是当lo >= hi 时，nums[lo]一定大于等于target。

    而又由于当nums[mid] < target时，lo总是等于mid + 1的，所以nums[lo]一定是第一个大于等于target的值（除非target大于数组中所有值，这样lo会走到nums.length）。

    所以我们先通过该函数寻找start，如果start等于数组长度，或者大于target，证明没有找到target，返回[-1, -1]

    然后再通过该函数，求第一个大于等于target + 1的值的索引，由于数组元素都是整数，所以这个索引减去1就一定是end。

    如此就找到了[start, end]。

    学到的思想是，二分查找是可以通过条件限制，精确限定部分查找位置的情况的，在以后的解题中要注意。
    */
    public int[] searchRange(int[] nums, int target) {
        int start = Solution.searchEqualOrGreater(nums, target);
        if (start == nums.length || nums[start] > target) {
            return new int[]{-1, -1};
        }
        return new int[] {start, Solution.searchEqualOrGreater(nums, target + 1) - 1};
    }

    private static int searchEqualOrGreater(int[] nums, int target) {
        int lo = 0;
        int hi = nums.length;
        while (lo < hi) {
            int mid = (lo + hi) / 2;
            if (nums[mid] < target) {
                lo = mid + 1;
            } else {
                hi = mid;
            }
        }
        return lo;
    }
```