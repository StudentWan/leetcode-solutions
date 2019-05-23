#### Slide Window

滑动窗算法的实现细节比较丰富，主要需要理解的是：

i指向下一个可以移除的位置
j指向下一个可以加入的位置

一次循环就是在移除一个元素或者加入一个元素

因此，窗中元素总是[i, j) {初始循环除外}

滑动窗算法的好处在于可以通过一次遍历寻找符合条件的**子字符串**，本算法就利用了该特性。

```java
class Solution {
    public int longestSubstring(String s, int k) {
        char[] str = s.toCharArray();
        int[] counts = new int[26];
        int i, j, max = 0, idx, unique, noLessThanK;
        for (int h = 1; h <= 26; h++) {
            Arrays.fill(counts, 0);
            i = 0;
            j = 0;
            unique = 0;
            noLessThanK = 0;
            while (j < str.length) {
                if (unique <= h) {
                    idx = str[j] - 'a';
                    if (counts[idx] == 0) {
                        unique++;
                    }
                    counts[idx]++;
                    if (counts[idx] == k) {
                        noLessThanK++;
                    }
                    j++;
                } else {
                    idx = str[i] - 'a';
                    if (counts[idx] == k) {
                        noLessThanK--;
                    }
                    counts[idx]--;
                    if (counts[idx] == 0) {
                        unique--;
                    }
                    i++;
                }
                if (unique == h && noLessThanK == h) {
                    max = Math.max(max, j - i);
                }
            }
        }
        return max;
    }
}
```