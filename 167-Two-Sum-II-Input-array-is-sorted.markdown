### 题目描述

#### 167. Two Sum II - Input array is sorted

Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution and you may not use the same element twice.

    Input: numbers={2, 7, 11, 15}, target=9
    Output: index1=1, index2=2

### 代码及思路：

#### 我的代码及思路：

```java
    /*
    本算法的时间复杂度是O(n)

    由于之前的Two Sum使用的是散列表来实现，所以这次也自然而然的想到了散列表。
    */
    public int[] twoSum(int[] numbers, int target) {
        HashMap<Integer, Integer> resMap = new HashMap<Integer, Integer>();
        int[] indicesArr = new int[2];
        for (int i = 0; i < numbers.length; i++) {
            if (resMap.containsKey(target - numbers[i])) {
                int lowIndex = resMap.get(target - numbers[i]) + 1;
                int highIndex = i + 1;
                indicesArr[0] = lowIndex;
                indicesArr[1] = highIndex;
                return indicesArr;
            }
            resMap.put(numbers[i], i);
        }
        return indicesArr;
    }
```

#### 学习到的代码及思路：

```java
    /*
    本算法的时间复杂度是O(n)

    因为数组是有序的，所以本算法使用了Two Pointer，思想值得学习。
    */
    public int[] twoSum(int[] numbers, int target) {
        int[] indicesArr = new int[2];
        int low = 0;
        int high = numbers.length - 1;
        while (low != high) {
            if (numbers[low] + numbers[high] == target) {
                indicesArr[0] = low + 1;
                indicesArr[1] = high + 1;
                return indicesArr;
            } else if (numbers[low] + numbers[high] < target) {
                low++;
            } else {
                high--;
            }
        }
        return indicesArr;
    }
```