### 题目描述

#### 45. Jump Game II

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

For example:

Given array A = `[2,3,1,1,4]`

The minimum number of jumps to reach the last index is `2`. (Jump `1` step from index 0 to 1, then `3` steps to the last index.)

Note:

You can assume that you can always reach the last index.

### 代码及思路：

#### 我的代码及思路：

```java
    /*
    本算法利用了贪心算法的思路，每次跳跃，都选取下一跳能跳的最远的点。

    因为下一跳能跳到最远的点，肯定能够跳到其他点所能达到的最好位置。

    所以以此贪心是正确的。
    */
    public int jump(int[] nums) {
        int step = 0;
        int i = 0;
        while (i < nums.length - 1) {
            if (nums[i] + i >= nums.length - 1) {
                step += 1;
                break;
            }
            
            int maxPos = i + 1;
            for (int j = i + 2; j <= nums[i] + i; j++) {
                if (nums[j] + j >= nums[maxPos] + maxPos) {
                    maxPos = j; 
                }
            }
            
            i = maxPos;
            step += 1;
        }
        return step;
    }
```

#### 学习到的代码及思路：

```java
    /*
    本算法也利用了贪心的思路。

    首先它记录了三个值。

    jumps代表目前已跳跃的步数。

    curEnd代表在目前已跳跃步数下，能够达到的最远的点。

    curFarthest代表下一次跳跃能够达到的最远的点。

    对数组进行循环，每遍历一个数，首先看能否更新curFarthest。

    当到达curEnd的时候，代表必须再跳出一步了，此时贪心选择curFarthest这个点作为新的curEnd，并对jumps进行加1。

    当能够跳到终点时，无论是否跳出循环（break可以不要，为了提高性能加上的），都不会再增加步数了。

    所以jumps此时就是到达终点所能跳的最少的步数。
    */
    public int jump(int[] nums) {
        int jumps = 0;
        int curEnd = 0;
        int curFarthest = 0;
        
        for (int i = 0; i < nums.length - 1; i++) {
            curFarthest = Math.max(curFarthest, i + nums[i]);
            if (i == curEnd) {
                jumps++;
                curEnd = curFarthest;
            }
            if (curEnd >= nums.length - 1) break;
        }
        
        return jumps;
    }
```