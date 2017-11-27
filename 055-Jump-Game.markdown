### 题目描述

#### 55. Jump Game

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

For example:
A = `[2,3,1,1,4]`, return `true`.

A = `[3,2,1,0,4]`, return `false`.

### 代码及思路：

#### 我的代码及思路：

```java
    /*
    本算法TLE了，实际复杂度应该是O(n^2).

    思路很简单：

    从头开始找，如果有能够jump到end的，记录它的位置，并将它设置为新的end.

    然后重新从头开始查找，直到end为0为止。

    如果一次查找后end没有减小，说明没有元素能够跳到end，这个时候返回false.
    */
    public boolean canJump(int[] nums) {
        int end = nums.length - 1;
        while (end > 0) {
            int tempEnd = end;
            for (int i = 0; i <= tempEnd; i++) {
                if (nums[i] + i >= tempEnd) {
                    tempEnd = i;
                    break;
                }
            }
            if (tempEnd < end) {
                end = tempEnd;
            } else {
                return false;
            }
        }
        return true;
    }
```

#### 学习到的代码及思路：

```java
    /*
    本算法的时间复杂度是O(n)。

    思路很巧妙，运用了动态规划的思想。

    即从nums[0]开始，记录到当前位置的元素能够到达的最远位置max。

    max只有可能取两个值，一个是除去当前元素外能到达的最远位置，另一个是当前元素能跳到的最远位置，取两者中的较大值。

    如果当前元素的索引i > max，说明该元素不可达，说明无法跳到最后，所以返回false。

    如果没有出现元素不可达的情况，则返回true。

    要学会这种以局部有解推导出全局有解的DP思想。
    */
    public boolean canJump(int[] nums) {
        int max = 0;
        for (int i = 0; i < nums.length;i++){
            if (i > max) return false;
            max = Math.max(nums[i]+i, max); 
        }
        return true; 
    }
```