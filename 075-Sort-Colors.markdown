### 题目描述

#### 75. Sort Colors

Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

`Note:`

You are not suppose to use the library's sort function for this problem.

### 代码及思路：

#### 我的代码及思路：

```java
    /*
    由于题目要求实际上是排序，所以用快排实现了一遍。
    */
    public void sortColors(int[] nums) {
        quickSort(nums, 0, nums.length - 1);
    }
    
    public void quickSort(int[] nums, int left, int right) {
        if (left > right) {
            return ;
        }
        
        int i = left, j = right, temp = nums[left];
        
        while (i != j) {
            while (nums[j] >= temp && i < j) {
                j--;
            }
            while (nums[i] <= temp && i < j) {
                i++;
            }
            
            if (i < j) {
                int t = nums[i];
                nums[i] = nums[j];
                nums[j] = t;
            }
        }
        
        nums[left] = nums[i];
        nums[i] = temp;
        
        quickSort(nums, left, i - 1);
        quickSort(nums, i + 1, right);
    }
```

#### 学习到的代码及思路：

```java
    /*
    考虑到题目元素的特殊性（只有0、1、2），所以可以不按照排序的思路来求解。

    记录每个元素的个数，再按顺序填充即可。
    */
    public void sortColors(int[] nums) {
        int n = nums.length;
        int num0 = 0;
        int num1 = 0;
        int num2 = 0;
        
        for (int i = 0; i < n; i++) {
            if (nums[i] == 0) num0++;
            else if(nums[i] == 1) num1++;
            else num2++;
        }
        
        for (int i = 0; i < num0; i++) nums[i] = 0;
        for (int i = 0; i < num1; i++) nums[i + num0] = 1;
        for (int i = 0; i < num2; i++) nums[i + num0 + num1] = 2;
    }
```