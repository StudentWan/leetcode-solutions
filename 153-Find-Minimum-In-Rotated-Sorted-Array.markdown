### 题目描述

### 153. Find Minimum in Rotated Sorted Array

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., `0 1 2 4 5 6 7` might become `4 5 6 7 0 1 2`).

Find the minimum element.

You may assume no duplicate exists in the array.

### 代码及思路：

#### 我的代码及思路1：

```java
    /*
    简单的遍历查找，主要的明确pivot的特征：

    1）如果数组被翻转过，那么nums[pivot] < nums[pivot - 1];

    2）如果数组没有被翻转过，那么pivot就是0
    */
    public int findMin(int[] nums) {
        int pivot = 0;
        
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] < nums[i - 1]) {
                pivot = i;
                break;
            }
        }
        
        return nums[pivot];
    }
```

#### 我的代码及思路2：

```java
    /*
    既然数组是部分有序的，那么直接遍历查找可能会造成性能损失。

    于是我再次思考了pivot的特征：

    1）如果数组被翻转过，那么nums[pivot] < nums[pivot - 1];

    2）如果数组没有被翻转过，那么pivot就是0

    那么是不是可以使用二分查找，设定初始lo = 0, hi = nums.length - 1

    如果翻转，pivot一定在lo与hi之间

    首先将pivot设置为0，in case没有翻转的情况。

    然后在lo < hi的循环下缩小查找范围

    每次循环设置mid = (lo + hi) / 2

    如果mid为0,说明lo = 0, hi = 1,此时pivot要么为1,要么没有翻转

    如果nums[mid] > nums[mid + 1],设置pivot = mid + 1

    如果nums[mid] < nums[mid - 1],设置pivot = mid

    如果nums[mid] > nums[mid - 1] && nums[mid] < nums[mid + 1] && nums[mid] >= nums[lo],那么翻转如果发生，一定发生在[mid + 1, hi]之间

    如果nums[mid] > nums[mid - 1] && nums[mid] < nums[mid + 1] && nums[mid] < nums[lo],那么翻转如果发生，一定发生在[lo, mid - 1]之间

    如果二分查找搜查完没有更改过pivot，则没有找到翻转处，pivot = 0

    最后返回nums[pivot]

    p.s. 写完发现这里的pivot改成min更合适
    */
    public int findMin(int[] nums) {
        int pivot = 0;
        int lo = 0;
        int hi = nums.length - 1;
        
        while (lo < hi) {
            int mid = (lo + hi) / 2;
            
            if (mid == 0) {
                if (nums[0] > nums[1]) {
                    pivot = 1;
                }
                break;
            }
            
            if (nums[mid] > nums[mid + 1]) {
                pivot = mid + 1;
                break;
            }
            else if (nums[mid] < nums[mid - 1]) {
                pivot = mid;
                break;
            }
            else if (nums[mid] > nums[mid - 1] && nums[mid] < nums[mid + 1] && nums[mid] >= nums[lo]) {
                lo = mid + 1;
            }
            else if (nums[mid] > nums[mid - 1] && nums[mid] < nums[mid + 1] && nums[mid] < nums[lo]) {
                hi = mid - 1;
            }
        }

        return nums[pivot];
    }
```