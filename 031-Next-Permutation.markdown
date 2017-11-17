### 题目描述

#### 31. Next Permutation

Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place, do not allocate extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

    1,2,3 → 1,3,2
    3,2,1 → 1,2,3
    1,1,5 → 1,5,1

#### 说明

这道题的题意比较难理解，其实意思就是，找一个字典排列，如果是最后一个字典排列了，就返回开头，举个例子：

    1 2 3
    1 3 2
    2 1 3
    2 3 1
    3 1 2
    3 2 1

input是其中的某一个排列，求它的下一个排列

### 代码及思路：

#### 我的代码及思路：

```java
    /*
    本算法的时间复杂度和空间复杂度都是O(n)。

    算法的思路不太好想，自己思考的话需要推演一些情况。

    说明一下，就是从input的尾部开始，寻找nums[i - 1] > nums[i]

    将nums[i]到nums[nums.length - 1]按升序排列

    然后用nums[i]开始的第一个大于nums[i - 1]的数跟nums[i - 1]置换

    这样就可以得到下一个排列了

    针对一些特殊情况做了特殊的处理，比如nums.length <= 1或者nums就是最后一个排列

    本算法对nums[i]到nums[nums.length - 1]的升序排列我使用了额外的数组来存储，所以空间复杂度较高。
    */
    public void nextPermutation(int[] nums) {
        if (nums.length <= 1) {
            return;
        }
        
        int i = nums.length - 1;
        while (i >= 1 && nums[i] <= nums[i - 1]) {
            i--;
        }
        if (i == 0) {
            Arrays.sort(nums);
            return;
        }
        int replaceVal = nums[i - 1];
        
        int[] tempArr = new int[nums.length - i];
        for (int j = 0; j < tempArr.length; j++) {
            tempArr[j] = nums[nums.length - j - 1];
        }
        for (int k = 0; k < tempArr.length; k++) {
            if (tempArr[k] > replaceVal) {
                nums[i - 1] = tempArr[k];
                tempArr[k] = replaceVal;
                break;
            }            
        }
        
        for (int l = 0; l < tempArr.length; l++) {
            nums[l + i] = tempArr[l];
        }
    }
```

#### 我的代码及学习到的思路：

```java
    /*
    本算法的时间复杂度是O(n)，空间复杂度是O(1)

    总体的解题思路与我自己的思路是一致的，但是在对nums[i]....nums[nums.length - 1]进行升序排序时，采用了交换排序的思路，不再额外分配数组空间，降低了空间复杂度，值得学习。
    */
    public void nextPermutation(int[] nums) {
        if (nums.length <= 0) {
            return;
        }
        
        int i = nums.length - 1;
        while (i >= 1 && nums[i] <= nums[i - 1]) {
            i--;
        }
        if (i == 0) {
            Arrays.sort(nums);
            return;
        }
        
        int temp;
        for (int j = i; j < (nums.length + i) / 2; j++) {
            temp = nums[nums.length - 1 - (j - i)];
            nums[nums.length - 1 - (j - i)] = nums[j];
            nums[j] = temp;
        }
        for (int k = i; k < nums.length; k++) {
            if (nums[k] > nums[i - 1]) {
                temp = nums[k];
                nums[k] = nums[i - 1];
                nums[i - 1] = temp;
                break;
            }
        }
    }
```
