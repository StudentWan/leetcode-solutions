### 题目描述

#### 84. Largest Rectangle in Histogram

Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.

![histogram](imgs/histogram.png)


Above is a histogram where width of each bar is 1, given height = `[2,1,5,6,2,3]`.

![histogram](imgs/histogram_area.png)

The largest rectangle is shown in the shaded area, which has area = `10` unit.

For example,

Given heights = `[2,1,5,6,2,3]`,

return `10`.

### 代码及思路：

#### 我的代码及思路：

```java
    /*
    本算法的思路很简单，时间复杂度为O(n ^ 2).

    本算法的思路是，遍历高度数组，每遍历一个元素，向左右遍历求得以此元素为上边所能得到的最大的矩形。

    在这些矩形中取得最大的，就是整个矩形图最大的矩形。
    */
    public int largestRectangleArea(int[] heights) {
        int maxForNow = 0;
        for (int i = 0; i < heights.length; i++) {
            if (i > 0 && heights[i] == heights[i - 1]) continue;
            int height = heights[i];
            int width = 1;
            for (int j = i - 1; j >= 0; j--) {
                if (heights[j] >= heights[i]) width++;
                else break;
            }
            for (int k = i + 1; k < heights.length; k++) {
                if (heights[k] >= heights[i]) width++;
                else break;
            }
            int tempArea = height * width;
            maxForNow = Math.max(maxForNow, tempArea);
        }
        return maxForNow;
    }
```

#### 学习到的代码及思路：

```java
    /*
    本算法十分巧妙，详细解法请见：http://chuansong.me/n/390896436960

    并不是很容易描述。

    简单的总结就是以一个递增栈来保存heights中元素的索引，通过对栈的操作，将可以求到的所有矩形进行遍历，最终取齐最大值。
    */
    public int largestRectangleArea(int[] heights) {
        int max = 0;
        Stack<Integer> s = new Stack<Integer>();
        for (int i = 0; i <= heights.length; i++) {
            int h = (i == heights.length ? 0 : heights[i]);
            if (s.isEmpty() || h >= heights[s.peek()]) s.push(i);
            else {
                int top = s.pop();
                max = Math.max(max, heights[top] * (s.isEmpty() ? i : i - 1 - s.peek()));
                i--;
            }
        }
        
        return max;
    }
```