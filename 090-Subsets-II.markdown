### 题目描述

#### 90. Subsets II

Given a collection of integers that might contain duplicates, `nums`, return all possible subsets (the power set).

`Note:` The solution set must not contain duplicate subsets.

For example,
If `nums` = `[1,2,2]`, a solution is:

    [
        [2],
        [1],
        [1,2,2],
        [2,2],
        [1,2],
        []
    ]

### 代码及思路：

#### 我的代码及思路：

```java
    /*
    本算法采用了递归的思想。

    首先将数组排序，这样重复元素就是相邻存在的了。

    然后将空数组加入到结果列表中。

    然后对数组进行遍历，如果元素不与上一个元素相等，则用它形成subset加入到列表中，并且以这些subsets开始递归。

    对每一组递归，设置一个start索引为加入元素的索引i + 1.

    进入递归后，开始循环，对从start开始的每一个元素，把不重复的元素与之前的subset相结合加入到结果列表中，再用这些subsets和新的索引i + 1进入下一个递归。

    结束后得到结果列表，Disscuss区提供的思路基本差不多，所以不再阐述。
    */
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> res = new ArrayList<List<Integer>>();
        res.add(new ArrayList<Integer>());
        
        for (int i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            List<Integer> tempRes = new ArrayList<Integer>();
            tempRes.add(nums[i]);
            res.add(new ArrayList<Integer>(tempRes));
            getSubsets(res, tempRes, nums, i + 1);
        }
        return res;
    }
    
    public void getSubsets(List<List<Integer>> res, List<Integer> tempRes, int[] nums, int start) {
        for (int i = start; i < nums.length; i++) {
            List<Integer> startWith = new ArrayList<Integer>(tempRes);
            if (i == start || nums[i] != nums[i - 1]) {
                startWith.add(nums[i]);
                res.add(new ArrayList<Integer>(startWith));
                getSubsets(res, startWith, nums, i + 1);
            }
        }
    }
```