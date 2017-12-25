### 题目描述

#### 80. Remove Duplicates from Sorted Array II

Follow up for "Remove Duplicates":
What if duplicates are allowed at most twice?

For example,
Given sorted array nums = `[1,1,1,2,2,3]`,

Your function should return length = `5`, with the first five elements of nums being `1`, `1`, `2`, `2` and `3`. It doesn't matter what you leave beyond the new length.

### 代码及思路：

#### 我的代码及思路：

```java
    /*
    与026一样，我们希望通过O(1)的额外空间复杂度来完成本题目，且不关去重长度后的数组是怎样的。

    因此思路也与026类似，即以不重复2次以上的元素对数组由前往后进行覆盖, 构成一个‘新’数组。

    我们以一个变量i来跟踪‘新’数组的倒数第二个元素，一个变量j来跟踪将要添加到‘新’数组中的元素。

    那么添加到数组中的元素不可以和nums[i]相等，如果相等就会有三个重复的元素了（因为数组是有序的）。

    添加一个元素后就将i向后移动一位。

    最后得到的数组length为i + 2
    */
    public int removeDuplicates(int[] nums) {
        int i = 0;
        for (int j = 2; j < nums.length; j++) {
            if (nums[j] != nums[i]) {
                nums[i + 2] = nums[j];
                i++;
            }
        }
        return i + 2;
    }
```

#### 学习到的代码及思路：

```java
    /*
    与我自己想到的思路是一致的，不过本算法以i表示‘新’数组的长度。
    */
    public int removeDuplicates(int[] nums) {
        int i = 0;
        for (int j = 0; j < nums.length; j++) {
            if (j < 2) {
                nums[i++] = nums[j];
            }
            else if (nums[j] > nums[i - 2]) {
                nums[i++] = nums[j];
            }
        }
        return i;
    }
```

