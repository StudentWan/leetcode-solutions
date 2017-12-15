### 题目描述

#### 78. Subsets

Given a set of `distinct` integers, nums, return all possible subsets (the power set).

`Note:` The solution set must not contain duplicate subsets.

For example,
If `nums` = `[1,2,3]`, a solution is:

    [
        [3],
        [1],
        [2],
        [1,2,3],
        [1,3],
        [2,3],
        [1,2],
        []
    ]

### 代码及思路：

#### 我的代码及思路：

```java
    /*
    采用递归的算法，先将空的subsets加入结果中
    
    然后递归调用，设立一个start，遍历由该start开头的list的全部情况。

    看了一下Disscuss区，基本上也都是采用这种办法。
    */
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> res = new ArrayList<List<Integer>>();
        res.add(new ArrayList<Integer>());
        res.addAll(getSubSets(nums, 0));
        return res;
    }
    
    public List<List<Integer>> getSubSets(int[] nums, int start) {
        List<List<Integer>> tempRes = new ArrayList<List<Integer>>();
        List<Integer> single = new ArrayList<Integer>();
        if (start != nums.length  - 1) {
            List<List<Integer>> prevRes = getSubSets(nums, start + 1);
            tempRes.addAll(prevRes);
            for(List<Integer> prevOne : prevRes) {
                List<Integer> nowOne = new ArrayList<Integer>();
                nowOne.add(nums[start]);
                nowOne.addAll(prevOne);
                tempRes.add(nowOne);
            }   
        }
        single.add(nums[start]);
        tempRes.add(single);
        return tempRes;
    }
```
