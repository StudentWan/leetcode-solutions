### 题目描述

#### 128. Longest Consecutive Sequence

Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

For example,

Given `[100, 4, 200, 1, 3, 2]`,

The longest consecutive elements sequence is `[1, 2, 3, 4]`. Return its length: `4`.

Your algorithm should run in O(n) complexity.

### 代码及思路

#### 我的代码及思路：

```java
    /*
    我想到的算法是将数组进行排序，一旦数组是有序的，问题就变得很简单了。

    但是由于Arrays.sort本身具有O(nlog2n)的复杂度，所以没有完全符合题意。

    不过运行时间却很快，比学习到的算法更快。
    */
    public int longestConsecutive(int[] nums) {
        Arrays.sort(nums);
        int max = 0;
        int len = 0;
        int num = 0;
        for (int i = 0; i < nums.length; i++) {
            if (i == 0) {
                num = nums[i];
                len++;
            }
            else {
                if (nums[i] == num) {
                    continue;
                }
                else if (nums[i] == num + 1){
                    num++;
                    len++;
                } 
                else {
                    len = 1;
                    num = nums[i];
                }
            }
            max = Math.max(max, len);
        }
        
        return max;
    }
```

#### 学习到的代码及思路：

```java
    /*
    本算法利用了HashSet来存储数组中的数。

    这样我们就可以通过for ( : )遍历HashSet，从而得到最长的序列。

    算法很一目了然，关键的问题在于要想到使用HashSet这种数据结构，它首先无重复；而且只保存Set中的数，没有额外的空间浪费；还可以在寻找序列中下一个数字时实现有序，确实非常适合这种题。

    看来数据结构也十分重要，需要注意学习。

    不过由于HashSet的方法具有一定的事件复杂度，所以我认为本算法应该实质上没有达到O(n)，它的运行时间比我自己想到的算法还慢。
    */
    public int longestConsecutive(int[] nums) {
        Set<Integer> num_set = new HashSet<Integer>();
        
        for (int num : nums) num_set.add(num);
        
        int lonLen = 0;
        
        for (int num : num_set) {
            
            if (!num_set.contains(num - 1)) {
                int curLen = 1;
                while(num_set.contains(num + 1)) {
                    curLen++;
                    num++;
                }
                lonLen = Math.max(lonLen, curLen);
            }
        }
        
        return lonLen;
    }
```