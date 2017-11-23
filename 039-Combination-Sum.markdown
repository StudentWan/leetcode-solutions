### 题目描述

#### 39. Combination Sum

Given a `set` of candidate numbers (`C`) (`without duplicates`) and a target number (`T`), find all unique combinations in `C` where the candidate numbers sums to `T`.

The `same` repeated number may be chosen from `C` unlimited number of times.

`Note:`

    All numbers (including target) will be positive integers.
    The solution set must not contain duplicate combinations.

For example, given candidate set `[2, 3, 6, 7]` and target `7`, 
A solution set is: 

    [
        [7],
        [2, 2, 3]
    ]

### 代码及思路：

#### 学习到的代码及思路：

```java
    /*

    这种不能确定需要多少数相加的情况，最好用递归迭代，也就是我们这个解法中所用到的回溯。

    我自己的思路也想采用递归，不过画蛇添足的想去除重复使用元素的情况，因此这里不再讨论。

    通过递归来确保迭代的添加元素进入结果中，也由于按序迭代的问题，并不会出现重复的情况。

    需要注意的是，在上一个迭代情况完毕并返回后，在进入下一个迭代情况前，将上一个迭代中加入到存储列表的元素给去除掉，这样才不会出错。

    2017/11/24记录：

    这原来是深度优先搜索（DFS）...，即对每一个可能的分支深入到不能再深入为止，然后回溯。
    */
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> results = new ArrayList<List<Integer>>();
        Arrays.sort(candidates);
        backTrack(results, new ArrayList<Integer>(), candidates, target, 0);
        return results;
    }
    
    private void backTrack(List<List<Integer>> results, List<Integer> tempResult, int[] candidates, int remain, int start) {
        if (remain < 0) {
            return;
        } else if (remain == 0) {
            results.add(new ArrayList<Integer>(tempResult));
        } else {
            for (int i = start; i < candidates.length; i++) {
                tempResult.add(candidates[i]);
                backTrack(results, tempResult, candidates, remain - candidates[i], i);
                tempResult.remove(tempResult.size() - 1);
            }
        }
    }
```