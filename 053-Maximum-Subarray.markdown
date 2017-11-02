### 题目描述

#### 53. Maximum Subarray

Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.

### 代码及思路：

我自己没有想到很好的思路，采用的是暴力搜索的方式。

但是通过学习Disscuss区学到了很巧妙的Kadane算法，下面做分享：

```java
    /*
    本算法的时间复杂度是O(n)，空间复杂度是O(1)

    这是解决最大子数组问题的最优算法Kadane算法，利用了动态规划的思想，从局部最优解+状态转移来寻找全局最优解。

    算法的思路很巧妙：即假设已知nums[0]...nums[i-1]的最大子数组，如何得到nums[0]...nums[i]的最大子数组。

    我们可以通过思考得到，nums[0]...nums[i]的最大子数组，只有可能等于nums[0]...nums[i-1]的最大子数组(我们记录它的值为maxForNow)，或者等于nums[k].....nums[i](0<=k<=i，我们记录它的值为maxPostfix)

    而maxPostfix也只可能取两个值中的最大值，即：previous maxPostfix + nums[i]，或者nums[i]

    于是就可以得到下面的算法，只遍历一次数组即可得到最优解
    */
    public int maxSubArray(int[] nums) {
        int maxForNow = nums[0];
        int maxPostfix = nums[0];
        for(int i = 1; i < nums.length; i++) {
            maxPostfix = Math.max(maxPostfix + nums[i], nums[i]);
            maxForNow = Math.max(maxForNow, maxPostfix);
        }
        return maxForNow;
    }
```