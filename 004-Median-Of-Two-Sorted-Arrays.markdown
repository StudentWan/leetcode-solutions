### 题目描述

#### 4. Median of Two Sorted Arrays

There are two sorted arrays `nums1` and `nums2` of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

`Example 1:`

    nums1 = [1, 3]
    nums2 = [2]

    The median is 2.0

`Example 2:`

    nums1 = [1, 2]
    nums2 = [3, 4]

    The median is (2 + 3)/2 = 2.5

### 代码及思路：

#### 我的代码及思路：

```java
    /*
    第一道hard，居然花了一个半小时做出来了，很开心。

    讲一讲思路吧还是！

    首先要理解题意，median就是中位数，如果m + n为偶数，那么就是中间两数之和的一半，如果m + n为奇数，那么就是中间的数

    要完成要求很简单，但达到O(log(m + n))就需要动点脑子了，我的思路是：

    用lo1、hi1和lo2、hi2分别记录nums1和nums2的所包含的最小/最大值。

    用以去掉的值count的最大值作为循环终止条件。

    每次循环去除掉nums1和nums2中的最小和最大值。

    如果lo1 > hi1或者lo2 > hi2，就证明该数组中的数都被去除了。

    最后剩下的1或2个数就可用来求得中位数。
    */
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int m = nums1.length;
        int n = nums2.length;
        int lo1 = 0;
        int hi1 = m - 1;
        int lo2 = 0;
        int hi2 = n - 1;
        
        int len = m + n;
        int count = 0;
        
        while (count < (len % 2 == 0 ? len - 2 : len - 1)){
            if (lo1 <= hi1 && lo2 <= hi2) {
                if (nums1[lo1] > nums2[lo2]) lo2++;
                else lo1++;
                count++;
            }
            else if (lo1 <= hi1) {
                lo1++;
                count++;
            }
            else {
                lo2++;
                count++;
            }
            
            if (lo1 <= hi1 && lo2 <= hi2) {
                if (nums1[hi1] > nums2[hi2]) hi1--;
                else hi2--;
                count ++;
            }
            else if (lo1 <= hi1) {
                hi1--;
                count++;
            }
            else {
                hi2--;
                count++;
            }
        }
        
        double res;
        
        if (lo1 == hi1 && lo2 == hi2) {
            res = (double)(nums1[lo1] +nums2[lo2]) / 2;
        }
        else if (lo1 == hi1) {
            res = nums1[lo1];
        }
        else if (lo2 == hi2){
            res = nums2[lo2];
        }
        else if (lo1 < hi1) {
            res = (double)(nums1[lo1] +nums1[hi1]) / 2;
        }
        else {
            res = (double)(nums2[lo2] +nums2[hi2]) / 2;
        }
        
        return res;
    }
```
