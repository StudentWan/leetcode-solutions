### 题目描述

#### 88. Merge Sorted Array

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

##### Note:

You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.

### 代码及思路：

#### 我的代码及思路：

```java
    /*
    本算法的时间复杂度是O(n^2)

    思路比较蠢，最开始想要依次比较nums1和nums2中的值，但是从头开始覆盖不知道怎么操作

    所以想到了利用Java可以对数组进行排序的特性，新建了一个数组temp接收所有nums1和nums2中初始化的值，然后对它进行排序

    最后用temp覆盖nums1
    */
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int[] temp = new int[m + n];
        for (int i = 0; i < temp.length; i++) {
            if (i < m) {
                temp[i] = nums1[i];
            } else {
                temp[i] = nums2[i - m];
            }
        }
        Arrays.sort(temp);
        for (int j = 0; j < temp.length; j++) {
            nums1[j] = temp[j];
        }
    }
```

#### 学习到的代码及思路：

```java
    /*
    本算法的时间复杂度是O(n)，没有额外的空间开销，比我的思路优秀很多

    无法从头覆盖，可以从尾部开始覆盖嘛...

    这个算法的思路是从尾到头进行比较，先比较nums1和nums2

    如果出现了一个数组有剩余项，则会出现两种情况

    如果nums1有剩余项，则不需要任何操作，因为它已经排好了

    如果nums2有剩余项，也只需要把nums2填进数组前面的位置就好了，因为nums1中的值已经被填充在了数组后边
    */
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int i = m - 1;
        int j = n - 1;
        int k = m + n - 1;
        
        while (i >= 0 && j >= 0) {
            nums1[k--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
        }
        while (j >= 0) {
            nums1[k--] = nums2[j--];
        }
    }
```