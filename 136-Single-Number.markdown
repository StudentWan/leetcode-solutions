### 题目描述

#### 136. Single Number

Given an array of integers, every element appears twice except for one. Find that single one.

`Note:`

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

### 代码及思路

#### 我的代码及思路：

```java
    /*
    又回到了Easy，轻松许多。

    很容易就可以想到利用HashMap的特性来求解此题。

    时间和空间复杂度都是O(n)。
    */
    public int singleNumber(int[] nums) {
        HashMap<Integer, Boolean> map = new HashMap<Integer, Boolean>();
        
        for (int num : nums) {
            if (map.containsKey(num)) {
                map.put(num, true);
            }
            else map.put(num, false);
        }
        
        for (int key : map.keySet()) {
            if (map.get(key) == false) return key;
        }
        
        return 0;
    }
```

#### 学习到的代码及思路：

```java
    /*
    学习到的算法非常的优雅，操作手法是位操作。

    利用异或运算来求得结果。

    主要利用了异或运算的两个特点：

    1. 0 ^ N = N, N ^ N = 0

    2.异或运算是可交换和可结合的。即： N1 ^ N2 ^ N3 ^ N4 = (N1 ^ N4) ^ (N2 ^ N3).

    于是，偶数个相同的数和一个不同的数一起异或，最终结果就是：0 ^ 0 ^ 0 .... ^ N。

    结果就是N。

    时间复杂度是O(n)，空间复杂度是O(1)。
    */
    public int singleNumber(int[] nums) {
        int result = 0;
        for (int num : nums) result ^= num;
        return result;
    }
```

