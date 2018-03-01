### 题目描述

#### 3. Longest Substring Without Repeating Characters

Given a string, find the length of the `longest substring` without repeating characters.

`Examples:`

Given `"abcabcbb"`, the answer is `"abc"`, which the length is 3.

Given `"bbbbb"`, the answer is `"b"`, with the length of 1.

Given `"pwwkew"`, the answer is `"wke"`, with the length of 3. Note that the answer must be a `substring`, `"pwke"` is a subsequence and not a substring.

### 代码及思路：

#### 我的代码及思路：

```java
    /*
    本算法的思路很简单，用一个HashMap维护最长的无重复子字符串。

    如果遇到重复的字符，就清空HashMap，从重复字符之后开始重新计算。

    清空HashMap和重新计算的时间开销太大，导致本算法TLE了。
    */
    public int lengthOfLongestSubstring(String s) {
        int max = 0;
        int count = 0;
        Map<Character, Integer> store = new HashMap<Character, Integer>();
        for(int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (!store.containsKey(c)) {
                store.put(c, i);
                count++;
                max = Math.max(count, max);
            }
            else {
                count = 0;
                i = store.get(c);
                store.clear();
            }
        }
        return max;
    }
```

#### 学习到的代码及思路：

```java
    /*
    本算法的解题方法看似与上面的算法差别不大，但其中的思想差别很大。

    本算法中，HashMap并没有保存最大无重复子串的键值对，而是对每一个键都保存了一个值，这样就可以不用清空map。

    在本算法中，用一个指针restart保存了子字符串开始的位置减1。

    如果遇到在store中有的字符，检查它的位置与restart的大小比较。

    如果restart大于等于它的位置，说明这个字符并不在子串里重复，可以正常的继续操作。

    如果restart小于它的位置，说明这个字符在子串里重复，这时重设restart的值以及count。

    与DISSCUSS区的双指针法实际上思路一致，但是可能更难理解一些。
    */
    public int lengthOfLongestSubstring(String s) {
        int max = 0;
        int count = 0;
        int restart = -1;
        Map<Character, Integer> store = new HashMap<Character, Integer>();
        for(int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (store.containsKey(c)) {
                if (restart < store.get(c)) {
                    restart = store.get(c);
                    count = i - restart - 1;
                }
            }
            count++;
            store.put(c, i);
            max = Math.max(max, count);
        }
        return max;
    }
```