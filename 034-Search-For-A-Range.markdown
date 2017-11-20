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