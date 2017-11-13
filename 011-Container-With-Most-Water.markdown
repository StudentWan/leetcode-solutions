### 题目描述

#### 11. Container With Most Water

Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

### 代码及思路：

#### 我的代码及思路：

```java
    /*
    我采用了简单的暴搜，时间复杂度是O(n^2)

    想法就是计算所有容器的面积，找出最大值。

    本算法会超时。
    */
    public int maxArea(int[] height) {
        int capacity;
        int max = 0;
        for (int i = 0; i < height.length; i++) {
            for (int j = i + 1; j < height.length; j++) {
                capacity = (j - i) * Math.min(height[i], height[j]);
                if (capacity > max) {
                    max = capacity;
                }
            }
        }
        return max;
    }
```

#### 学习到的代码及思路：

```java
    /*
    本算法的时间复杂度是O(n)。

    思路很巧妙，采用的是Two Pointers的思路。

    设start为0，end为height.length - 1

    以一个变量保存最大容积的临时值，并根据求出的新容积来进行比较

    如果开始边短于结束边，那么只有向内移动开始边，才有可能找到更大的容积值。

    如果结束边短于开始边，那么只有向内移动结束边，才有可能找到更大的容积值。

    只需要遍历一次数组。
    */
    public int maxArea(int[] height) {
        int start = 0;
        int end = height.length - 1;
        int maxArea = 0;
        while (start < end) {
            maxArea = Math.max(maxArea, (end - start) * Math.min(height[start], height[end]));
            if (height[start] <= height[end]) {
                start++;
            } else {
                end--;
            }
        }
        return maxArea;
    }
```