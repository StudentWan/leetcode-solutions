### 题目描述

#### 189. Rotate Array

Rotate an array of n elements to the right by k steps.

For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

### 代码及思路：

#### 我的代码及思路1：

```java
    /*
    本算法做到了空间复杂度O(1)，但时间复杂度达到了O(n^2)。

    思路类似于暴搜，每次翻转元素都重置数组中的每个元素，所以带来的时间开销比较大。
    */
    public void rotate(int[] nums, int k) {
        int temp;
        while (k > 0) {
            temp = nums[nums.length - 1];
            for (int i = nums.length - 1; i >= 1; i--) {
                nums[i] = nums[i - 1];
            }
            nums[0] = temp;
            k--;
        }
    }
```

#### 我的代码及思路2：

```java
    /*
    本算法的时间复杂度是O(n)，但空间复杂度也达到了O(n).

    思路是通过求模我们可以得到翻转后元素的位置，利用一个新的数组空间暂存这个翻转后数组的值，再将这个数组复制到原数组。
    */
    public void rotate(int[] nums, int k) {
        int[] temp = new int[nums.length];
        for (int i = 0 ; i < nums.length; i++) {
            temp[(i + k) % nums.length] = nums[i];
        }
        for (int i = 0; i < nums.length; i++) {
            nums[i] = temp[i];
        }
    }
```

#### 学习到的代码及思路：

```java
    /*
    本算法的时间复杂度是O(n)，空间复杂度为O(1)，相对于我自己想到的算法更加优秀。

    思路是先通过求模得到k真正的非循环的值。

    以数组[1, 2, 3, 4, 5, 6, 7]，k = 3为例

    然后先翻转1到4，得到 [4, 3, 2, 1, 5, 6, 7]

    再翻转5到7，得到 [4, 3, 2, 1, 7, 6, 5]

    最后翻转整个数组，得到 [5, 6, 7, 1, 2, 3, 4]
    */
    public void rotate(int[] nums, int k) {
        k %= nums.length;
        reverse(nums, 0, nums.length - 1 - k);
        reverse(nums, nums.length - k, nums.length - 1);
        reverse(nums, 0, nums.length - 1);
    }
    
    public void reverse(int[] nums, int start, int end) {
        int temp;
        while (start < end) {
            temp = nums[end];
            nums[end] = nums[start];
            nums[start] = temp;
            start++;
            end--;
        }
    }
```