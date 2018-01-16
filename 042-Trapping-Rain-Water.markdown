### 题目描述

#### 42. Trapping Rain Water

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

For example, 

Given `[0,1,0,2,1,0,1,3,2,1,2,1]`, return `6`.

![rain water trap](./imgs/rainwatertrap.png)

### 代码及思路：

#### 我的代码及思路1：

```java
    /*
    本算法可解，但时间复杂度太高，最终TLE了。
    
    思路是遍历数组，每次遇到可能包含水的索引，先计算一横排能包含的容量，然后再将该元素自减，看自减之后是否仍能有包含水的横排。
    
    由于对同一位置的循环次数太多，导致算法效率比较低。
    */
    public int trap(int[] height) {
        int water = 0;
        for (int i = 0; i < height.length - 2; i++) {
            if (height[i + 1] < height[i]) {
                int j = i + 2;
                while (j < height.length) {
                    if (height[j] >= height[i]) {
                        water += j - i - 1;
                        break;
                    }
                    j++;
                }
                height[i]--;
                i--;
            }
        }
        return water;
    }
```

#### 我的代码及思路2：

```java
    /*
    本算法为了解决上一算法，每个可能的索引自减次数太多的问题，不再计算横排包含的水的容量。
    
    而是直接先将一个位置开始可能包含的水的最大容量加上，在遍历后续元素时，再根据元素的值减去原先多包含的水。
    
    注意，如果一个容器在找不到右边容器时，仍应该将其自减，防止漏掉比它矮的容器。
    */
    public int trap(int[] height) {
        int water = 0;
        int start = 0;
        int end = 0;
        for (int i = 0; i < height.length - 1; i++) {
            if (start < end && i > start && i < end) {
                water -= height[i];
            }
            else if (start < end && i == end) {
                start = 0;
                end = 0;
                i--;
            }
            else {
                if (height[i + 1] < height[i]) {
                    int j = i + 2;
                    while (j < height.length) {
                        if (height[j] >= height[i]) {
                            int high = height[i];
                            water += (high * (j - i -1));
                            start = i;
                            end = j;
                            break;
                        }
                        j++;
                    }
                    if (j == height.length) {
                        height[i]--;
                        i--;
                    }
                }
            }
        }
        return water;
    }
```

#### 学习到的代码及思路：

```java
    /*
    本题目在DISSCUSS学到的算法很精妙，时间复杂度仅为O(n)。
    
    本算法的思路是，设置两个索引，分别为left和right，从左和右两边开始遍历数组。
    
    再设置左索引及其左的最大值leftMax和右索引及其右的最大值rightMax。
    
    如果leftMax < rightMax，那么说明leftMax - height[left]容量的水可以被包含，原因简单，右边的木板更长。
    
    这种情况下将左索引加1，因为left索引处包含的水已被计算，没有其他的价值了。
    
    反之亦然。
    */
    public int trap(int[] height) {
        int left = 0;
        int right = height.length - 1;
        int leftMax = 0;
        int rightMax = 0;
        int max = 0;
        
        while (left < right) {
            leftMax = Math.max(leftMax, height[left]);
            rightMax = Math.max(rightMax, height[right]);
            if (leftMax < rightMax) {
                max += leftMax - height[left];
                left++;
            }
            else {
                max += rightMax - height[right];
                right--;
            }
        }
        
        return max;
    }
```
