### 题目描述

#### 16. 3Sum Closest

Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

    For example, given array S = {-1 2 1 -4}, and target = 1.

    The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

### 代码及思路：

#### 我的代码及思路1：

```java
    /*
    暴搜，时间复杂度O(n^3)

    比较与target的差的绝对值来确定是否更接近target，本来以为肯定A不了，居然AC了...
    */
    public int threeSumClosest(int[] nums, int target) {
        int result = nums[0] + nums[1] + nums[2];
        for (int i = 0; i < nums.length - 2; i++) {
            for (int j = i + 1; j < nums.length - 1; j++) {
                for (int k = j + 1; k < nums.length; k++) {
                    if (Math.abs(nums[i] + nums[j] + nums[k] - target) < Math.abs(result - target)) {
                        result = nums[i] + nums[j] + nums[k];
                    }
                }
            }
        }
        return result;
    }
```

#### 我的代码及思路2：

```java
    /*
    本算法的时间复杂度是O(n^2)

    依然是采用提取出一个元素，然后以Two Pointers的思路来解决剩下的两个元素。

    先将数组排序。

    然后比较绝对值取得当前的最接近target的结果

    如果三个元素之和小于target，low++

    如果三个元素之和大于target，high--

    如果相等直接返回

    这样可以遍历到所有的情况
    */
    public int threeSumClosest(int[] nums, int target) {
        Arrays.sort(nums);
        int result = nums[0] + nums[1] + nums[2];
        for (int i = 0; i < nums.length - 1; i++) {
            int low = i + 1;
            int high = nums.length - 1;
            while (low < high) {
                int dValTemp = nums[i] + nums[low] + nums[high] - target;
                int dValPrev = result - target;
                if (Math.abs(dValTemp) < Math.abs(dValPrev)) {
                    result = nums[i] + nums[low] + nums[high];
                }
                if (dValTemp < 0) {
                    low++;
                }
                else if (dValTemp > 0){
                    high--;
                }
                else {
                    break;
                }
            }
        }
        return result;
    }
```