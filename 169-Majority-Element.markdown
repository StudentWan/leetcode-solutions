### 题目描述

#### 169. Majority Element

Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

### 代码及思路：

#### 我的代码及思路：

```java
    /*
    本算法的时间复杂度是O(n)

    缺点在于创建和操作散列表所带来的开销
    */
    public int majorityElement(int[] nums) {
        HashMap<Integer, Integer> eleStore = new HashMap<Integer, Integer>();
        for (int i = 0; i < nums.length; i++) {
            if (eleStore.containsKey(nums[i])) {
                eleStore.put(nums[i], eleStore.get(nums[i]) + 1);
            } else {
                eleStore.put(nums[i], 1);
            }
        }
        
        int max = 0;
        int element = 0;
        for (int key : eleStore.keySet()) {
            if (eleStore.get(key) > max) {
                element = key;
                max = eleStore.get(key);
            }
        }
        
        return element;
    }
```

#### 学习到的代码及思路：

```java
    /*
    本算法的时间复杂度是O(n)，空间复杂度是O(1)

    本算法的设想十分巧妙。

    由于majority的个数大于（注意不是大于等于）floor(n / 2)

    所以对元素遍历做count，先把nums[0]设为majority，count设为1

    如果count == 0, 则更换majority
    如果majority和遇到的元素相等，则count++
    如果majority和遇到的元素不等，则count--

    因为正确的majority的个数大于等于总个数的一半

    所以最后剩下的一定是正确的majority
    */
    public int majorityElement(int[] nums) {
        int majority = nums[0];
        int count = 1;
        for (int i = 1; i < nums.length; i++) {
            if (count == 0) {
                count++;
                majority = nums[i];
            } else if (majority == nums[i]) {
                count++;
            } else {
                count--;
            }
        }
        return majority;
    }
```