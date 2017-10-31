### 题目描述

#### 26. Remove Duplicates from Sorted Array

Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

For example,

Given input array `nums = [1,1,2]`,

Your function should return length = `2`, with the first two elements of nums being `1` and `2` respectively. It doesn't matter what you leave beyond the new length.

### 代码及思路：

#### 我的代码及思路：

```java
/*
我的算法时间复杂度是O(n^3)，很蠢。

昨天学到了操作散列表，所以今天依然想用HashMap来做，先把独特的元素用HashMap存起来、排序，再赋给原先的数组。

这在空间和时间开销上都有不少浪费。
*/
public int removeDuplicates(int[] nums) {
        Map<Integer, Integer> unique = new HashMap<Integer, Integer>();
        for (int i = 0; i < nums.length; i ++) {
            if (!unique.containsKey(nums[i])) {
                unique.put(nums[i], nums[i]);
            }
        }
        int[] resArr = new int[unique.size()];
        int j = 0;
        for(int key : unique.keySet()) {
            resArr[j] = key;
            j++;
        }
        Arrays.sort(resArr);
        for (int i = 0; i < resArr.length; i++) {
            nums[i] = resArr[i];
        }
        return resArr.length;
}
```

#### 学习到的代码及思路

```java
/*
本算法的时间复杂度是O(n),空间复杂度是O(1)。

算法的构思很巧妙，采用双指针来对数组进行操作，i指针走的慢，j指针走得快。

使用j指针遍历数组，如果遇到与nums[i]不同的数，就将i指针加1，同时设置nums[i]=nums[j]。

这样，在j指针遍历完成后就可以得到一个前半部分无重复的排序数组，通过i的值也可以确定无重复部分的长度。

双指针应该是有序列表操作中十分有效的方法，以后要注意运用。
*/
public int removeDuplicates(int[] nums) {
        if (nums.length == 0) {
            return 0;
        }
        int i = 0;
        for (int j = 1; j < nums.length; j++) {
            if (nums[j] != nums[i]) {
                i++;
                nums[i] = nums[j];
            }
        }
        return i + 1;
}
```