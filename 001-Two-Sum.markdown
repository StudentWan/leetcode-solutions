### 题目描述

#### 1. Two Sum

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

#### Example:

    Given nums = [2, 7, 11, 15], target = 9,

    Because nums[0] + nums[1] = 2 + 7 = 9,
    
    return [0, 1].

### 代码及思路

```java
/* 
这个算法的复杂度是O(n)。

采用的是HashMap(散列表)来实现，运用Java中的HashMap类。

我最开始想到的思路是遍历两遍数组，得到一个O(n^2)的算法，并不优秀。

这个算法的思路是：

由于each input would have exactly one solution，并且you may not use the same element twice，所以作为答案的元素1肯定在可以数组中找到同样作为答案的元素2

于是遍历数组，如果target与遍历到的元素的差值不在HashMap中，就将该元素与其索引加入到HashMap中。

如果target与遍历到的元素的差值在HashMap中，就返回该值。
 */
public int[] twoSum(int[] nums, int target) {
    int[] result = new int[2];
    Map<Integer, Integer> map = new HashMap<Integer, Integer>();
    for (int i = 0; i < nums.length; i++) {
        if (map.containsKey(target - nums[i])) {
            result[1] = i;
            result[0] = map.get(target - nums[i]);
            return result;
        }
        map.put(nums[i], i);
    }
    return result;
}
```